import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SevenDayForecastRoutingModule } from './seven-day-forecast-routing.module';
import { SevenDayForecastComponent } from './seven-day-forecast.component';


@NgModule({
  declarations: [
    SevenDayForecastComponent
  ],
  imports: [
    CommonModule,
    SevenDayForecastRoutingModule
  ]
})
export class SevenDayForecastModule { }
