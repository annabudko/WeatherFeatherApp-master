import {Component, OnInit} from '@angular/core';
import {Forecast} from '../../../models/forecast.model';
import {DailyForecast} from '../../../models/daily-forecast.model';
import {LocationService} from '../../../services/location.service';
import {ForecastService} from '../../../services/forecast.service';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.scss']
})
export class TomorrowComponent implements OnInit {

  public tomorrowForecast: DailyForecast | undefined;

  constructor(private locService: LocationService,
              private forecastService: ForecastService) {
  }

  ngOnInit(): void {
    this.locService.findCurrentLocation().subscribe(loc => {
      this.forecastService.getWeatherByLocation(loc.coords.latitude, loc.coords.longitude, 'onecall').subscribe(
        forecast => {
          console.log(forecast.daily[1]);
          this.tomorrowForecast = forecast.daily[1];
        }
      );
    });
  }

}
