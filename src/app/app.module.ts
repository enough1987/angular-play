import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoursesModule } from './view/courses/courses.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './view/auth/auth.module';
import { CourseModule } from './view/course/course.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoursesModule,
    AuthModule,
    CourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
