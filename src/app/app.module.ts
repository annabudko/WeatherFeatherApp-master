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
import {FiltersComponent} from './modules/filters/filters.component';
import {AgmCoreModule} from '@agm/core';
import { SearchSelectComponent } from './components/search-select/search-select.component';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StartComponent,
    FiltersComponent,
    SearchSelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpzsYhToczUTLVMwCBH_yYraHbDGBhE78'
    }),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
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
