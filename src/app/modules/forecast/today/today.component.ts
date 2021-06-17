import {Component, OnInit} from '@angular/core';
import {Forecast} from '../../../shared/models/forecast.model';
import {LocationService} from '../../../services/location.service';
import {ForecastService} from '../../../services/forecast.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  public currentDate = new Date();
  public unit = 'metric';
  public city = '';
  public forecast: Forecast | undefined;

  constructor(private locService: LocationService,
              private forecastService: ForecastService) {
  }

  ngOnInit(): void {
    this.getForecast();
  }

  public setUnitFilter(unit: string): void {
    this.unit = unit;
    this.getForecast();
  }

  public setCityFilter(city: string): void {
    this.city = city;
    this.getForecast();
  }

  public getForecast(): void {
    if (this.city !== '') {
      this.forecastService.getWeatherByCityName(this.city, 'weather', this.unit).subscribe(
        forecast => {
          this.forecast = forecast;
        }
      );
    } else {
      this.locService.locationSubject.subscribe(loc => {
        this.forecastService.getWeatherByLocation(loc.lat, loc.long, 'weather', this.unit).subscribe(
          forecast => {
            console.log(forecast);
            this.forecast = forecast;
          }
        );
      });
    }
  }
}
