import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private unit = 'metric';
  private mode = 'xml';
  private exclude = 'current,minutely,hourly,alerts';

  constructor(private http: HttpClient, private translateService: TranslateService) {
  }

  public getWeatherByLocation(lat: number, lon: number, period: string, unit?: string): Observable<any> {

    this.unit = unit ?? 'metric';

    let params = new HttpParams()
      .set('lat', lat.toFixed(2).toString())
      .set('lon', lon.toFixed(2).toString())
      .set('units', this.unit)
      .set('appid', environment.API_KEY)
      .set('lang', this.translateService.currentLang);

    (period === 'onecall') ? params = params.append('exclude', this.exclude) : params = params.append('mode', this.mode);

    const options = {params};
    return this.http.get(environment.API_URL.concat(period), options);
  }

  public getWeatherByCityName(cityName: string, period: string, unit?: string): Observable<any> {

    this.unit = unit ?? 'metric';

    let params = new HttpParams()
      .set('q', cityName)
      .set('units', this.unit)
      .set('appid', environment.API_KEY)
      .set('lang', this.translateService.currentLang);

    (period === 'onecall') ? params = params.append('exclude', this.exclude) : params = params.append('mode', this.mode);

    const options = {params};

    return this.http.get(environment.API_URL.concat(period), options);
  }

}
