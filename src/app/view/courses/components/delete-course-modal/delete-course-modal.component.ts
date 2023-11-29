import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.scss'],
  standalone: true,
  imports: [SharedModule]
})

export class DeleteCourseModalComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteCourseModalComponent>
  ) { }

  onAction(actionName: string) {
    this.dialogRef.close(actionName);
  }

}