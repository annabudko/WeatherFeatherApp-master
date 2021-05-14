import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WeatherBoardComponent} from './modules/weather-board/weather-board.component';
import {WheatherBoardModule} from './modules/weather-board/wheather-board.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WheatherBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
