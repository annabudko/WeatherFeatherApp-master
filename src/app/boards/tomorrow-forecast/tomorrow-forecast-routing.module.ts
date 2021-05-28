import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TomorrowForecastComponent } from './tomorrow-forecast.component';

const routes: Routes = [{ path: '', component: TomorrowForecastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TomorrowForecastRoutingModule { }
