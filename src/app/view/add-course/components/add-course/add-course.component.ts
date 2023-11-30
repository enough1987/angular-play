import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/shared/api/courses.service';
import { Course } from 'src/app/view/declarations';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  course: Course = {
    title: '',
    date: null,
    duration: 0,
    description: '',
    topRated: false,
  } as unknown as Course;

  constructor(private router: Router, public coursesService: CoursesService) {}

  addCourse() {
    if(!this.course?.title || !this.course?.description || !this.course?.date || !this.course?.duration) {
      console.error('all field are required');
      return;
    }
    this.coursesService.createCourse(this.course)

    this.router.navigate(['']);
  }

}
