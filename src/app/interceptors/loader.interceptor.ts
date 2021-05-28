import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
/*    const loaderService = this.injector.get(LoaderService);

    loaderService.show();

    return next.handle(req).pipe(
      delay(5000),
      finalize(() => loaderService.hide())
    );*/
  }
}
