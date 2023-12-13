import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCourseModalComponent } from '../delete-course-modal/delete-course-modal.component';
import { Router } from '@angular/router';
import { Course } from '@app/models';
import { CoursesService } from '@core/services/courses.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  public list: Course[] = [];

  constructor(private cd: ChangeDetectorRef, private router: Router, public coursesService: CoursesService, public dialog: MatDialog) {
    coursesService.getList().subscribe((data) => {
      this.list = data as Course[];
      this.cd.markForCheck();
    });
  }

  removeCourse(id: number) {
    const dialogRef = this.dialog.open(DeleteCourseModalComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'yes') {
        this.coursesService.removeItem(id);
      }
    });
  }

  editCourse(id: number) {
    this.router.navigate(['courses', id]);
  }
}
