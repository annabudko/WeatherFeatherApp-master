import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../../models/forecast.model';
import {DailyForecast} from '../../../models/daily-forecast.model';

@Component({
  selector: 'app-daily-weather-board',
  templateUrl: './daily-weather-board.component.html',
  styleUrls: ['./daily-weather-board.component.scss']
})
export class DailyWeatherBoardComponent implements OnInit {

  @Input() public dailyForecast: DailyForecast | undefined;
  @Input() public showDate = true;
  @Input() public showPicture = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
