import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CoursesService } from '@core/services/courses.service';

@Component({
  selector: 'app-footer-list',
  templateUrl: './footer-list.component.html',
  styleUrls: ['./footer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterListComponent {

  constructor(public coursesService: CoursesService) {}

  loadMore(){
    this.coursesService.loadMore();
  }
}
