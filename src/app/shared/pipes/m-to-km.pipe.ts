import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mkm'
})
export class MToKmPipe implements PipeTransform {

  transform(value: number, exponent = 3): string {
    return Math.floor(value / Math.pow(10, exponent)).toString() + ' km';
  }

}
