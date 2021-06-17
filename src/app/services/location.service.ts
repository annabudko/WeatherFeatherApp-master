import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Coordinates} from '../shared/models/coordinates.model';
import {ForecastService} from './forecast.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public locationSubject = new BehaviorSubject<Coordinates>({lat: 0, long: 0});
  public cityNameSubject = new BehaviorSubject('');

  constructor(public forecast: ForecastService) {
    this.locationSubject.next(JSON.parse(localStorage.getItem('currentPosition') as string) as Coordinates);
    this.cityNameSubject.next(localStorage.getItem('currentCity') as string);
  }

  public findCurrentLocation(): void {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: Coordinates = {
            lat: position.coords.latitude,
            long: position.coords.longitude
          };
          localStorage.setItem('currentPosition', JSON.stringify(coords));
          this.findCityName(coords);
          this.locationSubject.next(coords);
        },
        (error) => this.locationSubject.error(error)
      );
    } else {
      this.locationSubject.error('Unsupported Browser');
    }
  }

  public findCityName(coords: Coordinates): void {
    this.forecast.getWeatherByLocation(coords.lat, coords.long, 'weather').subscribe(
      forecast => {
        console.log(forecast.current.city.attr.name);
        localStorage.setItem('currentCity', forecast.current.city.attr.name);
        this.cityNameSubject.next(forecast.current.city.attr.name);
      }
    );
  }

}
