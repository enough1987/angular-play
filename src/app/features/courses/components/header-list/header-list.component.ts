import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '@app/core/services/courses.service';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderListComponent {
  public search = '';

  constructor(private router: Router, public coursesService: CoursesService) {}

  public submit(e: Event) {
    e.preventDefault();
    this.coursesService.changeSearch(this.search);
  }

  public addCourse() {
    this.router.navigate(['/courses/new']);
  }
}
