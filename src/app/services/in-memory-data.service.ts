import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb(): any {
    const cities = [
      {id: 1, name: 'Hong Kong'},
      {id: 2, name: 'Bangkok'},
      {id: 3, name: 'London'},
      {id: 4, name: 'Macau'},
      {id: 5, name: 'Paris'},
      {id: 6, name: 'Dubai'},
      {id: 7, name: 'New York'},
      {id: 8, name: 'Istanbul'},
      {id: 9, name: 'Kiev'},
      {id: 10, name: 'Tokyo'}
    ];
    return {cities};
  }

}
