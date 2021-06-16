import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Coordinates} from '../models/coordinates.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public locationSubject = new BehaviorSubject<Coordinates>({lat: 0, long: 0});

  constructor() {
    console.log('construct');
    this.locationSubject.next(JSON.parse(localStorage.getItem('currentPosition') as string) as Coordinates);
  }

  public findCurrentLocation(): void {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: Coordinates = {
            lat: position.coords.longitude,
            long: position.coords.latitude
          };
          localStorage.setItem('currentPosition', JSON.stringify(coords));
          this.locationSubject.next(coords);
        },
        (error) => this.locationSubject.error(error)
      );
    } else {
      this.locationSubject.error('Unsupported Browser');
    }
  }

}
