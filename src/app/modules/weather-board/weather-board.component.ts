import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather-board.component.html',
  styleUrls: ['./weather-board.component.scss']
})
export class WeatherBoardComponent implements OnInit {

  public currentDate: string | undefined;


  constructor() {
  }

  ngOnInit(): void {
  }

}
