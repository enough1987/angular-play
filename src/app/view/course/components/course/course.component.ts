import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/declarations';
import { CoursesService } from 'src/app/shared/services/courses.service';

const NEW_COURSE: Course = {
  id: 0,
  name: '',
  date: '',
  length: 0,
  description: '',
  authors: [],
  isTopRated: false,
}
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  id = 0;
  course: Course = NEW_COURSE;

  constructor(private router: Router, private route: ActivatedRoute, public coursesService: CoursesService) {
    this.route.paramMap.subscribe( params => {
      this.id = +(params.get('id') || 0);
      this.id && this.coursesService.getItemById(this.id).subscribe((data) => {
        this.course = data || NEW_COURSE;
      });
    });
  }

  validate() {
    if(!this.course?.name || !this.course?.description || !this.course?.date || !this.course?.length) {
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

    this.coursesService.updateItem(this.course).subscribe((res) => {
      if(res) this.router.navigate(['']);
    });
  }

  cancel() {
    this.router.navigate(['']);
  }

}
