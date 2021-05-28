import {Component, OnInit} from '@angular/core';
import {DailyForecast} from '../../../models/daily-forecast.model';
import {LocationService} from '../../../services/location.service';
import {ForecastService} from '../../../services/forecast.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  public dailyForecast: DailyForecast[] | undefined;

  constructor(private locService: LocationService,
              private forecastService: ForecastService) {
  }

  ngOnInit(): void {
    this.locService.findCurrentLocation().subscribe(loc => {
      this.forecastService.getWeatherByLocation(loc.coords.latitude, loc.coords.longitude, 'onecall').subscribe(
        forecast => {
          console.log(forecast);
          this.dailyForecast = forecast.daily;
          console.log(this.dailyForecast);
        }
      );
    });
  }

}
