import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'unixToDate'
})
export class UnixToDatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): Date {
    return new Date(value * 1000);
  }

}
