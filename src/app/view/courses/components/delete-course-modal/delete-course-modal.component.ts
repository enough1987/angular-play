import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.scss'],
  standalone: true,
})

export class DeleteCourseModalComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteCourseModalComponent>
  ) { }

  onAction(actionName: string) {
    this.dialogRef.close(actionName);
  }

}