import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../models/forecast.model';
import {enterAnimation} from '../../../animation';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss'],
  animations: [enterAnimation]
})

export class WeatherBoardComponent implements OnInit {

  @Input() public forecast: Forecast | undefined;
  @Input() public unit = 'metric';

  public imgSrc = environment;

  constructor() {
  }

  ngOnInit(): void {
  }
}
