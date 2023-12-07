import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@app/models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: Array<Course>, nameValue: string): Array<Course> {
    return array?.filter(item => item.name?.toLowerCase()?.includes(nameValue?.toLowerCase()));
  }
}
