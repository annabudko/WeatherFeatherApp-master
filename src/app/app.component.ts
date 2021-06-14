import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeUk from '@angular/common/locales/uk';
import localeRu from '@angular/common/locales/ru';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent {

  constructor(private translateService: TranslateService) {

    translateService.addLangs(['en', 'ru', 'ua']);
    this.translateService.use(environment.defaultLocale);

    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    registerLocaleData(localeEn, 'en');
    registerLocaleData(localeUk, 'ua');
    registerLocaleData(localeRu, 'ru');
  }

}
