import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CoreModule } from '@core/core.module';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.scss'],
  standalone: true,
  imports: [CoreModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DeleteCourseModalComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteCourseModalComponent>
  ) { }

  onAction(actionName: string) {
    this.dialogRef.close(actionName);
  }

}