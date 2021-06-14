import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MToKmPipe} from './pipes/m-to-km.pipe';
import {PressurePipe} from './pipes/pressure.pipe';
import {TemperaturePipe} from './pipes/temperature.pipe';
import {SpeedPipe} from './pipes/speed.pipe';
import {UnixToDatePipe} from './pipes/unix-to-date.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FiltersComponent} from './components/filters/filters.component';
import {DailyWeatherBoardComponent} from './components/daily-weather-board/daily-weather-board.component';
import {SearchSelectComponent} from './components/search-select/search-select.component';
import {WeatherBoardComponent} from './components/weather-board/weather-board.component';
import {LocaleModule} from './locale.module';

@NgModule({
  declarations: [
    SearchSelectComponent,
    DailyWeatherBoardComponent,
    WeatherBoardComponent,
    FiltersComponent,
    MToKmPipe,
    PressurePipe,
    TemperaturePipe,
    SpeedPipe,
    UnixToDatePipe,
    FiltersComponent,
    DailyWeatherBoardComponent,
  ],
  exports: [
    CommonModule,
    SearchSelectComponent,
    DailyWeatherBoardComponent,
    WeatherBoardComponent,
    FiltersComponent,
    UnixToDatePipe,
    FiltersComponent,
    DailyWeatherBoardComponent,
    LocaleModule
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    FormsModule,
    ReactiveFormsModule,
    LocaleModule
  ]
})
export class SharedModule {
}
