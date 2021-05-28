import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'msToKms'
})
export class MsToKmsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value * 3.6).toFixed().toString().concat(' km/h');
  }

}
