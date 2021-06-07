import {Component, OnInit} from '@angular/core';
import {DailyForecast} from '../../../models/daily-forecast.model';
import {LocationService} from '../../../services/location.service';
import {ForecastService} from '../../../services/forecast.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('void => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({opacity: 0}))
          ])
        ], {optional: true}),
        query(':enter', [
          style({opacity: 0}),
          stagger(100, [
            animate('0.5s', style({opacity: 1}))
          ])
        ], {optional: true})
      ])
    ])
  ],
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
    this.locService.findCurrentLocation().subscribe(loc => {
      this.forecastService.getWeatherByLocation(loc.coords.latitude, loc.coords.longitude, 'onecall').subscribe(
        forecast => {
          this.forecast = forecast.daily;
        }
      );
    });
  }

}
