import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseComponent } from './components/course/course.component';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CourseModule { }
