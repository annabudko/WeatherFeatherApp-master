import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ForecastRoutingModule} from './forecast-routing.module';
import {TodayComponent} from './today/today.component';
import {TomorrowComponent} from './tomorrow/tomorrow.component';
import {DailyComponent} from './daily/daily.component';
import {MenuComponent} from './menu/menu.component';
import {MainComponent} from './main/main.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    TodayComponent,
    TomorrowComponent,
    DailyComponent,
    MenuComponent,
    MainComponent,

  ],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    SharedModule
  ]
})
export class ForecastModule {
}
