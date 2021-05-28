import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodayForecastRoutingModule } from './today-forecast-routing.module';
import { TodayForecastComponent } from './today-forecast.component';


@NgModule({
  declarations: [
    TodayForecastComponent
  ],
  imports: [
    CommonModule,
    TodayForecastRoutingModule
  ]
})
export class TodayForecastModule { }
