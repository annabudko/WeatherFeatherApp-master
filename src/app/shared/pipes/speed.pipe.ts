import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'speed'
})
export class SpeedPipe implements PipeTransform {

  transform(value: number, unit: string, ...args: unknown[]): unknown {
    if (unit === 'imperial') {
      return Math.round(value).toString();
    }
    return Math.round(value * 3.6).toString();
  }

}
