import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TomorrowForecastRoutingModule } from './tomorrow-forecast-routing.module';
import { TomorrowForecastComponent } from './tomorrow-forecast.component';


@NgModule({
  declarations: [
    TomorrowForecastComponent
  ],
  imports: [
    CommonModule,
    TomorrowForecastRoutingModule
  ]
})
export class TomorrowForecastModule { }
