import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {StartComponent} from './modules/start/start.component';
import {HttpErrorInterceptor} from './http-error.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {XmlInterceptor} from './interceptors/xml.interceptor';
import { FiltersComponent } from './modules/filters/filters.component';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StartComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
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
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
