import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private apiURL = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = '38aee4dd3ef50715f5644f4f7a63e31d';
  private unit = 'metric';
  private mode = 'xml';
  private exclude = 'current,minutely,hourly,alerts';

  constructor(private http: HttpClient) {
  }

  public getWeatherByLocation(lat: number, lon: number, period: string): Observable<any> {

    let params = new HttpParams()
      .set('lat', lat.toFixed(2).toString())
      .set('lon', lon.toFixed(2).toString())
      .set('units', this.unit)
      .set('appid', this.apiKey);


    if (period === 'onecall') {
      params = params.append('exclude', this.exclude);
    } else {
      params = params.append('mode', this.mode);
    }
    const options = {params};
    return this.http.get(this.apiURL.concat(period), options);
  }

  public getWeatherByCityName(cityName: string, period: string, stateCode?: string, countryCode?: string): Observable<any> {

    let params = cityName;
    params = stateCode ? `${params},${stateCode}` : params;
    params = countryCode ? `${params},${countryCode}` : params;
    const options =
      {
        params: new HttpParams()
          .set('q', params)
          .set('units', this.unit)
          .set('appid', this.apiKey)
          .set('mode', this.mode)
      };
    return this.http.get(this.apiURL.concat(period), options);
  }

}
