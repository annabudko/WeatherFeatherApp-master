import {NgxXmlToJsonService} from 'ngx-xml-to-json';
import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class XmlInterceptor implements HttpInterceptor {

  constructor(private ngxXmlToJsonService: NgxXmlToJsonService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    req = req.clone({responseType: 'text'});

    return next.handle(req).pipe(map(event => {
      // @ts-ignore
      if (event instanceof HttpResponse && event.headers.get('content-type').indexOf('application/xml') >= 0) {
        const options = {
          textKey: 'text',
          attrKey: 'attr',
          cdataKey: 'cdata',
        };
        event = event.clone({body: this.ngxXmlToJsonService.xmlToJson(event.body, options)});
      } else { // @ts-ignore
        if (event instanceof HttpResponse && event.headers.get('content-type').indexOf('application/json') >= 0) {
          event = event.clone({body: JSON.parse(event.body)});
        }
      }

      return event;
    }));
  }
}
