import { Component } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-footer-list',
  templateUrl: './footer-list.component.html',
  styleUrls: ['./footer-list.component.scss']
})
export class FooterListComponent {

  constructor(public coursesService: CoursesService) {}

  loadMore(){
    this.coursesService.loadMore();
  }
}
