import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/shared/declarations';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<Course>, field: string): Array<Course> {
    array?.sort((a: Course, b: Course) => {
      if (a[field as never] < b[field as never]) {
        return -1;
      } else if (a[field as never] > b[field as never]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
