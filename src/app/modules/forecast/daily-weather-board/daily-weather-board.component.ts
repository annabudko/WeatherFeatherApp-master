import {Component, Input, OnInit} from '@angular/core';
import {DailyForecast} from '../../../models/daily-forecast.model';
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-daily-weather-board',
  templateUrl: './daily-weather-board.component.html',
  styleUrls: ['./daily-weather-board.component.scss', '../weather-board/weather-board.component.scss'],
  animations: [
    trigger('enter',
      [
        state('in', style({display: 'block'})),
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
  ]
})

export class DailyWeatherBoardComponent implements OnInit {

  @Input() public dailyForecast: DailyForecast | undefined;
  @Input() public unit = 'metric';
  @Input() public showDate = true;
  @Input() public showPicture = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
