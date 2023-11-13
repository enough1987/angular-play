import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/view/declarations';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: Array<Course>, nameValue: string): Array<Course> {
    return array.filter(item => item.title?.includes(nameValue));
  }
}
