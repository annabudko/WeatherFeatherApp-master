import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodayComponent} from './today/today.component';
import {TomorrowComponent} from './tomorrow/tomorrow.component';
import {DailyComponent} from './daily/daily.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'today',
        pathMatch: 'full'
      },
      {
        path: 'today',
        component: TodayComponent
      },
      {
        path: 'tomorrow',
        component: TomorrowComponent
      },
      {
        path: 'daily',
        component: DailyComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastRoutingModule {
}
