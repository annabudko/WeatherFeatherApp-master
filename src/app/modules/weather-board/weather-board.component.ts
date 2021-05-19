import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Forecast} from '../../models/forecast.model';
import {LocationService} from '../../services/location.service';
import {ForecastService} from '../../services/forecast.service';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss']
})
export class WeatherBoardComponent implements OnInit {

  // public currentDate: string | undefined;
  public weather: Observable<Forecast> | undefined;
  public wIcon: string | undefined;
  constructor(
    private locService: LocationService,
    private forecastService: ForecastService) {
  }

  ngOnInit(): void {
    this.locService.findCurrentLocation();
    this.forecastService.getCurrentWeatherByLocation(this.locService.lat, this.locService.long).subscribe(
      forecast => {
      }
    );
  }

}
