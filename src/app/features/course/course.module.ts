import { NgModule } from '@angular/core';
import { CourseComponent } from './components/course/course.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CoreModule
  ],
  providers: []
})
export class CourseModule { }
