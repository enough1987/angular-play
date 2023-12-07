import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@app/models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent {
  @Input({ required: true }) item!: Course;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  editCourse(id: number) {
    this.edit.emit(id);
  }

  removeCourse(id: number) {
    this.delete.emit(id);
  }

}
