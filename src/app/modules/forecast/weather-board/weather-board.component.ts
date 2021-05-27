import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from '../../../models/forecast.model';
import {MToKmPipe} from '../../../pipes/m-to-km.pipe';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss'],
  providers: [MToKmPipe]
})
export class WeatherBoardComponent implements OnInit {

  @Input() public forecast: Forecast | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }
}
