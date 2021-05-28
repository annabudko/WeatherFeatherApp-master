import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SevenDayForecastComponent } from './seven-day-forecast.component';

const routes: Routes = [{ path: '', component: SevenDayForecastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SevenDayForecastRoutingModule { }
