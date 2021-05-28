import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() {
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
}
