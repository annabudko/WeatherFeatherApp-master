import {Component, Input, OnInit} from '@angular/core';
import {DailyForecast} from '../../../models/daily-forecast.model';
import {enterAnimation} from '../../../animation';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-daily-weather-board',
  templateUrl: './daily-weather-board.component.html',
  styleUrls: ['./daily-weather-board.component.scss', '../weather-board/weather-board.component.scss'],
  animations: [enterAnimation]
})

export class DailyWeatherBoardComponent implements OnInit {

  @Input() public dailyForecast: DailyForecast | undefined;
  @Input() public unit = 'metric';
  @Input() public showDate = true;
  @Input() public showPicture = false;

  public imgSrc = environment;

  constructor() {
  }

  ngOnInit(): void {
  }

}
