import {Component, OnInit} from '@angular/core';
import {DailyForecast} from '../../../models/daily-forecast.model';
import {LocationService} from '../../../services/location.service';
import {ForecastService} from '../../../services/forecast.service';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.scss'],
})

export class TomorrowComponent implements OnInit {

  public unit = 'metric';
  public city = '';
  public forecast: DailyForecast | undefined;

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
      this.forecastService.getWeatherByCityName(this.city, 'onecall', this.unit).subscribe(
        forecast => {
          this.forecast = forecast.daily[1];
        });
    } else {
      this.locService.locationSubject.subscribe(loc => {
        console.log(loc);
        this.forecastService.getWeatherByLocation(loc.lat, loc.long, 'onecall', this.unit).subscribe(
          forecast => {
            this.forecast = forecast.daily[1];
          }
        );
      });
    }
  }

}
