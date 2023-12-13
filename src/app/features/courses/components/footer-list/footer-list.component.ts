import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CoursesService } from '@core/services/courses.service';

@Component({
  selector: 'app-footer-list',
  templateUrl: './footer-list.component.html',
  styleUrls: ['./footer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterListComponent {
  canLoad = true;

  constructor(private cd: ChangeDetectorRef, public coursesService: CoursesService) {
    this.coursesService.canLoad().subscribe((canLoad) => {
      this.canLoad = canLoad;
      this.cd.markForCheck();
    })
  }

  loadMore(){
    this.coursesService.loadMore();
  }
}
