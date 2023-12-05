import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { StoreService } from 'src/app/shared/services/store.service';
import { DeleteCourseModalComponent } from '../delete-course-modal/delete-course-modal.component';
import { Router } from '@angular/router';
import { Course } from 'src/app/shared/declarations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list: Course[] = [];
  public search = '';

  constructor(private router: Router, public coursesService: CoursesService, public storeService: StoreService, public dialog: MatDialog) {
    // TODO: change to async
    coursesService.getList().subscribe((data) => {
      this.list = data as Course[];
    });

    storeService.search$.subscribe((value: string) => {
      this.search = value;
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
