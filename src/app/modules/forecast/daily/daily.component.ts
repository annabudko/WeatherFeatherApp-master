import {Component, OnInit} from '@angular/core';
import {DailyForecast} from '../../../shared/models/daily-forecast.model';
import {LocationService} from '../../../services/location.service';
import {ForecastService} from '../../../services/forecast.service';
import {enterAnimation} from '../../../animation';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
  animations: [enterAnimation]
})
export class DailyComponent implements OnInit {

  public unit = 'metric';
  public city = '';
  public forecast: DailyForecast[] = [];

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
    this.locService.locationSubject.subscribe(loc => {
      this.forecastService.getWeatherByLocation(loc.lat, loc.long, 'onecall').subscribe(
        forecast => {
          this.forecast = forecast.daily.slice(1);
        }
      );
    });
  }

}
