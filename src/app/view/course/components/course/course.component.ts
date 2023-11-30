import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/shared/api/courses.service';
import { Course } from 'src/app/view/declarations';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  id = '';
  course: Course = {
    title: '',
    date: null,
    duration: 0,
    description: '',
    topRated: false,
  } as unknown as Course;

  constructor(private router: Router, private route: ActivatedRoute, public coursesService: CoursesService) {
    this.route.paramMap.subscribe( params => {
      this.id = params.get('id') || '';
      const course = this.coursesService.getItemById(this.id) as Course;
      if(course) {
        this.course = course;
      }
    });
  }

  validate() {
    if(!this.course?.title || !this.course?.description || !this.course?.date || !this.course?.duration) {
      console.error('all field are required');
      return false;
    }
    return true;
  }

  addCourse() {
    if(!this.validate()) return;

    this.coursesService.createCourse(this.course);

    this.router.navigate(['']);
  }

  updateCourse() {
    if(!this.validate()) return;

    this.coursesService.updateItem(this.course);

    this.router.navigate(['']);
  }

  cancel() {
    this.router.navigate(['']);
  }

}
