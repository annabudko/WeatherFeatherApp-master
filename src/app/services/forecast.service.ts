import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from './http.service';
import {HttpParams} from '@angular/common/http';
import {Forecast} from '../models/forecast.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private apiURL = 'api.openweathermap.org/data/2.5/weather';
  private apiKey = '38aee4dd3ef50715f5644f4f7a63e31d';

  // private apiURL = 'https://api.weatherbit.io/v2.0/';
  // private apiKey = '162030f7767d420986b076d631b71c49';

  constructor(private http: HttpService) {
  }

  private getCurrentWeatherByCityName(cityName: string, stateCode?: string, countryCode?: string): Observable<Forecast> {
    let params = cityName;
    params = stateCode ? `${params},${stateCode}` : params;
    params = countryCode ? `${params},${countryCode}` : params;
    const options =
      {
        params: new HttpParams()
          .set('q', params)
          .set('appid', this.apiKey)
      };
    return this.getCurrentWeather(options);
  }

  private getCurrentWeatherByLocation(lat: string, lon: string): Observable<Forecast> {
    const options =
      {
        params: new HttpParams()
          .set('lat', lat)
          .set('lon', lon)
          .set('appid', this.apiKey)
      };
    return this.getCurrentWeather(options);
  }

  private getCurrentWeather(options: { params: HttpParams }): Observable<Forecast> {
    return this.http.get(this.apiURL, options);
  }

}
