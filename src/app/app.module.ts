import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WeatherBoardComponent} from './modules/weather-board/weather-board.component';
import {WheatherBoardModule} from './modules/weather-board/wheather-board.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MenuComponent } from './modules/menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StartComponent } from './start/start.component';
import {HttpErrorInterceptor} from './http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WeatherBoardComponent,
    MenuComponent,
    PageNotFoundComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WheatherBoardModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
