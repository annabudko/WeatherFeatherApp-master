import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private citiesURL = 'assets/city.list.min.json';

  constructor(private http: HttpClient) {
  }

  public findCurrentLocation(): Observable<any> {
    return new Observable<any>(observer => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position);
            observer.complete();
          },
          (error) => observer.error(error)
        );
      } else {
        observer.error('Unsupported Browser');
      }
    });
  }

  public getCities(): Observable<any> {
    return this.http.get(this.citiesURL);
  }

}
