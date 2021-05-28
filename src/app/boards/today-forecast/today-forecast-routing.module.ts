import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayForecastComponent } from './today-forecast.component';

const routes: Routes = [{ path: '', component: TodayForecastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodayForecastRoutingModule { }
