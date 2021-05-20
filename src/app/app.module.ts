import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WeatherBoardComponent} from './modules/weather-board/weather-board.component';
import {WheatherBoardModule} from './modules/weather-board/wheather-board.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MenuComponent} from './modules/menu/menu.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {StartComponent} from './start/start.component';
import {HttpErrorInterceptor} from './http-error.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ForecastComponent} from './modules/forecast/forecast.component';
import {MToKmPipe} from './pipes/m-to-km.pipe';
import {PressurePipe} from './pipes/pressure.pipe';
import {TemperaturePipe} from './pipes/temperature.pipe';
import {SpeedPipe} from './pipes/speed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherBoardComponent,
    MenuComponent,
    PageNotFoundComponent,
    StartComponent,
    ForecastComponent,
    MToKmPipe,
    PressurePipe,
    TemperaturePipe,
    SpeedPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WheatherBoardModule,
    AppRoutingModule,
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
