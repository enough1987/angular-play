import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if(!value) return value as unknown as string;

    const d = new Date(value);
    const newValue = d.getHours() + 'h ' + d.getMinutes() + 'min.';

    return newValue;
  }

}
