import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from 'src/app/shared/api/courses.service';
import { StoreService } from 'src/app/shared/services/store.service';
import { Course } from 'src/app/view/declarations';
import { DeleteCourseModalComponent } from '../delete-course-modal/delete-course-modal.component';
import { Router } from '@angular/router';

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
    this.list = coursesService.getList() as Course[];

    storeService.search$.subscribe((value: string) => {
      this.search = value;
    });
  }

  removeCourse(id: string) {
    const dialogRef = this.dialog.open(DeleteCourseModalComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'yes') {
        this.list = this.coursesService.removeItem(id) as Course[];
      }
    });
  }

  editCourse(id: string) {
    this.router.navigate(['courses', id]);
  }
}
