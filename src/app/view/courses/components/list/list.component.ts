import { Component } from '@angular/core';
import { CoursesService } from 'src/app/shared/api/courses.service';
import { StoreService } from 'src/app/shared/services/store.service';
import { Course } from 'src/app/view/declarations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list: Course[]
  public search = '';

  constructor(coursesService: CoursesService, storeService: StoreService) {
    // TODO: change to async
    this.list = coursesService.getHeroes();

    storeService.search$.subscribe((value: string) => {
      this.search = value;
    });
  }

}
