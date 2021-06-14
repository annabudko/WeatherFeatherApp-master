import {Injectable} from '@angular/core';
import {MissingTranslationHandlerParams} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MissingTranslationService {

  constructor() {
  }

  private static handle(params: MissingTranslationHandlerParams): string {
    return `WARN: '${params.key}' is missing in '${params.translateService.currentLang}' locale`;
  }
}
