import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../../models/forecast.model';
import {enterAnimation} from '../../../animation';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss'],
  animations: [enterAnimation]
})

export class WeatherBoardComponent implements OnInit {

  @Input() public forecast: Forecast | undefined;
  @Input() public unit = 'metric';

  constructor() {
  }

  ngOnInit(): void {
  }
}
