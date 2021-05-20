import {Component, OnInit} from '@angular/core';
import {Forecast} from '../../models/forecast.model';
import {LocationService} from '../../services/location.service';
import {ForecastService} from '../../services/forecast.service';
import {MToKmPipe} from '../../pipes/m-to-km.pipe';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss'],
  providers: [MToKmPipe]
})
export class WeatherBoardComponent implements OnInit {

  public forecast: Forecast | undefined;
  public wIcon: string | undefined;

  constructor(
    private locService: LocationService,
    private forecastService: ForecastService) {
  }

  ngOnInit(): void {
    this.locService.findCurrentLocation().subscribe(loc => {
      console.log(loc);
      console.log(loc.coords.latitude, loc.coords.longitude);
      this.forecastService.getCurrentWeatherByLocation(loc.coords.latitude.toFixed(2), loc.coords.longitude.toFixed(2)).subscribe(
        forecast => {
          this.forecast = forecast;
          console.log(this.forecast);
        }
      );
    });
  }
}
