import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private unit = 'metric';
  private mode = 'xml';
  private exclude = 'current,minutely,hourly,alerts';

  constructor(private http: HttpClient) {
  }

  public getWeatherByLocation(lat: number, lon: number, period: string, unit?: string): Observable<any> {

    if (unit) {
      this.unit = unit;
    }
    let params = new HttpParams()
      .set('lat', lat.toFixed(2).toString())
      .set('lon', lon.toFixed(2).toString())
      .set('units', this.unit)
      .set('appid', environment.API_KEY);

    if (period === 'onecall') {
      params = params.append('exclude', this.exclude);
    } else {
      params = params.append('mode', this.mode);
    }
    const options = {params};

    return this.http.get(environment.API_URL.concat(period), options);
  }

  public getWeatherByCityName(cityName: string, period: string, stateCode?: string, countryCode?: string, unit?: string): Observable<any> {

    if (unit) {
      this.unit = unit;
    }
    let params = cityName;

    params = stateCode ? `${params},${stateCode}` : params;
    params = countryCode ? `${params},${countryCode}` : params;

    const options =
      {
        params: new HttpParams()
          .set('q', params)
          .set('units', this.unit)
          .set('appid', environment.API_KEY)
          .set('mode', this.mode)
      };
    return this.http.get(environment.API_URL.concat(period), options);
  }

}
