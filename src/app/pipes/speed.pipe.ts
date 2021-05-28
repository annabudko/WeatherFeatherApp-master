import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speed'
})
export class SpeedPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value.toString();
  }

}
