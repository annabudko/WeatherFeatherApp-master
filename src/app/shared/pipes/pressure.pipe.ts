import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pressure'
})
export class PressurePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value.toString();
  }

}
