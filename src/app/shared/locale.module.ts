import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocaleDatePipe} from './pipes/locale-date.pipe';
import {TranslateModule} from '@ngx-translate/core';
import {SelectLanguageComponent} from './components/select-language/select-language.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    LocaleDatePipe,
    SelectLanguageComponent,
  ]
  ,
  exports: [
    CommonModule,
    TranslateModule,
    LocaleDatePipe,
    SelectLanguageComponent
  ]
  ,
  imports: [
    CommonModule,
    MatSelectModule,
  ]
})
export class LocaleModule {

}
