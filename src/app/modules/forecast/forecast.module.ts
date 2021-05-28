import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ForecastRoutingModule} from './forecast-routing.module';
import {TodayComponent} from './today/today.component';
import {TomorrowComponent} from './tomorrow/tomorrow.component';
import {DailyComponent} from './daily/daily.component';
import {MenuComponent} from './menu/menu.component';
import {MainComponent} from './main/main.component';
import {WeatherBoardComponent} from './weather-board/weather-board.component';
import {MToKmPipe} from '../../pipes/m-to-km.pipe';
import {PressurePipe} from '../../pipes/pressure.pipe';
import {TemperaturePipe} from '../../pipes/temperature.pipe';
import {SpeedPipe} from '../../pipes/speed.pipe';
import {MsToKmsPipe} from '../../pipes/ms-to-kms.pipe';
import {DailyWeatherBoardComponent} from './daily-weather-board/daily-weather-board.component';
import {UnixToDatePipe} from '../../pipes/unix-to-date.pipe';

@NgModule({
  declarations: [
    TodayComponent,
    TomorrowComponent,
    DailyComponent,
    MenuComponent,
    MainComponent,
    WeatherBoardComponent,
    DailyWeatherBoardComponent,
    MToKmPipe,
    PressurePipe,
    TemperaturePipe,
    SpeedPipe,
    MsToKmsPipe,
    UnixToDatePipe,
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule
  ]
})
export class ForecastModule {
}
