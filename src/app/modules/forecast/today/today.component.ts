import {Component, OnInit} from '@angular/core';
import {Forecast} from '../../../models/forecast.model';
import {LocationService} from '../../../services/location.service';
import {ForecastService} from '../../../services/forecast.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  public currentDate = new Date();
  public forecast: Forecast | undefined;

  constructor(private locService: LocationService,
              private forecastService: ForecastService) {
  }

  ngOnInit(): void {
    this.locService.findCurrentLocation().subscribe(loc => {
      this.forecastService.getWeatherByLocation(loc.coords.latitude, loc.coords.longitude, 'weather').subscribe(
        forecast => {
          console.log(forecast);
          this.forecast = forecast;
        }
      );
    });
  }

}
