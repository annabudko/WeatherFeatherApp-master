import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, unit: string, ...args: unknown[]): unknown {
    if (unit === 'standard') {
      return Math.round(value).toString().concat('К');
    }
    if (unit === 'imperial') {
      return Math.round(value).toString().concat('°F');
    }
    return Math.round(value).toString().concat('°C');
  }

}
