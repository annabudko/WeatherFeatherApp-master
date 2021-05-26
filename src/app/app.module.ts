import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {StartComponent} from './modules/start/start.component';
import {HttpErrorInterceptor} from './http-error.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MToKmPipe} from './pipes/m-to-km.pipe';
import {PressurePipe} from './pipes/pressure.pipe';
import {TemperaturePipe} from './pipes/temperature.pipe';
import {SpeedPipe} from './pipes/speed.pipe';
import {XmlInterceptor} from './interceptors/xml.interceptor';
import {MsToKmsPipe} from './pipes/ms-to-kms.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StartComponent,
    MToKmPipe,
    PressurePipe,
    TemperaturePipe,
    SpeedPipe,
    MsToKmsPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XmlInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
