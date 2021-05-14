import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from './http.service';
import {HttpParams} from '@angular/common/http';
import {Forecast} from './forecast.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private apiURL = 'api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpService) {
  }

  private getCurrentWeatherByCityName(cityName: string, apikey: string, stateCode?: string, countryCode?: string): Observable<Forecast> {
    let params = cityName;
    params = stateCode ? `${params},${stateCode}` : params;
    params = countryCode ? `${params},${countryCode}` : params;
    const options =
      {
        params: new HttpParams()
          .set('q', params)
          .set('appid', apikey)
      };
    return this.getCurrentWeather(options);
  }

  private getCurrentWeatherByLocation(lat: string, apikey: string, lon: string): Observable<Forecast> {
    const options =
      {
        params: new HttpParams()
          .set('lat', lat)
          .set('lon', lon)
          .set('appid', apikey)
      };
    return this.getCurrentWeather(options);
  }

  private getCurrentWeather(options: { params: HttpParams }): Observable<Forecast> {
    return this.http.get(this.apiURL, options);
  }

}
