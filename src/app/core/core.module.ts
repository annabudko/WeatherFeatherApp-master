import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {MissingTranslationHandler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MissingTranslationService} from '../services/missing-translation.service';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {XmlInterceptor} from './interceptors/xml.interceptor';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MissingTranslationService},
      extend: true
    })
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
    }
  ]
})
export class CoreModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
