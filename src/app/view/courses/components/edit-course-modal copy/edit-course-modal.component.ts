import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { Course } from 'src/app/view/declarations';

@Component({
  selector: 'app-edit-course-modal',
  templateUrl: './edit-course-modal.component.html',
  styleUrls: ['./edit-course-modal.component.scss'],
  standalone: true,
  imports: [SharedModule]
})

export class EditCourseModalComponent {
  item: Course;

  constructor(
    private dialogRef: MatDialogRef<EditCourseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course
  ) {
    this.item = {...data};
  }

  onAction(actionName: string) {
    this.dialogRef.close({
      actionName,
      title: this.item.title
    });
  }

}