import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StartRoutingModule} from './start-routing.module';
import {StartComponent} from './start.component';
import {LocaleModule} from '../../shared/locale.module';


@NgModule({
  declarations: [
    StartComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    LocaleModule,
  ]
})
export class StartModule {
}
