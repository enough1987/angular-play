import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from 'src/app/shared/api/courses.service';
import { StoreService } from 'src/app/shared/services/store.service';
import { Course } from 'src/app/view/declarations';
import { DeleteCourseModalComponent } from '../delete-course-modal/delete-course-modal.component';
import { EditCourseModalComponent } from '../edit-course-modal copy/edit-course-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public list: Course[]
  public search = '';

  constructor(public coursesService: CoursesService, public storeService: StoreService, public dialog: MatDialog) {
    // TODO: change to async
    this.list = coursesService.getList();

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
        this.list = this.coursesService.removeItem(id);
      }
    });
  }

  editCourse(course: Course) {
    const dialogRef = this.dialog.open(EditCourseModalComponent, {
      width: '250px',
      data: course
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.actionName === 'yes') {
        this.list = this.coursesService.updateItem({
          ...course,
          title: result.title
        });
      }
    });
  }
}
