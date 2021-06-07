import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../../models/forecast.model';
import {MToKmPipe} from '../../../pipes/m-to-km.pipe';
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss'],
  providers: [MToKmPipe],
  animations: [trigger('enter',
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

export class WeatherBoardComponent implements OnInit {

  @Input() public forecast: Forecast | undefined;
  @Input() public unit = 'metric';

  constructor() {
  }

  ngOnInit(): void {
  }
}
