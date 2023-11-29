import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/view/declarations';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent {
  @Input({ required: true }) item!: Course;
  @Output() edit = new EventEmitter<Course>();
  @Output() delete = new EventEmitter<string>();

  editCourse(item: Course) {
    this.edit.emit(item);
  }

  removeCourse(id: string) {
    this.delete.emit(id);
  }

}
