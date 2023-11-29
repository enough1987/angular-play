import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCourseComponent } from './components/add-course/add-course.component';



@NgModule({
  declarations: [
    AddCourseComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AddCourseModule { }
