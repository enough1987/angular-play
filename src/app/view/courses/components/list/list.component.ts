import { Component } from '@angular/core';
import { CoursesService } from 'src/app/shared/api/courses.service';
import { Course } from 'src/app/view/declarations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list: Course[]

  constructor(coursesService: CoursesService) {
    // TODO: change to async
    this.list = coursesService.getHeroes();
  }

}
