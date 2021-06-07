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
import {DailyWeatherBoardComponent} from './daily-weather-board/daily-weather-board.component';
import {UnixToDatePipe} from '../../pipes/unix-to-date.pipe';
import {FiltersComponent} from './filters/filters.component';
import {MatSelectModule} from '@angular/material/select';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchSelectComponent} from '../../components/search-select/search-select.component';

@NgModule({
  declarations: [
    TodayComponent,
    TomorrowComponent,
    DailyComponent,
    MenuComponent,
    MainComponent,
    WeatherBoardComponent,
    DailyWeatherBoardComponent,
    FiltersComponent,
    SearchSelectComponent,
    MToKmPipe,
    PressurePipe,
    TemperaturePipe,
    SpeedPipe,
    UnixToDatePipe,
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ForecastModule {
}
