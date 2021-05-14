import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) {
  }

  public get(apiUrl: string, options: any = {}): Observable<any> {
    return this.http.get(apiUrl, options);
  }

}
