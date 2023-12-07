import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '@app/models';
import { CoursesService } from '@core/services/courses.service';

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
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {
  id = 0;
  course: Course = NEW_COURSE;

  constructor(private cd: ChangeDetectorRef, private router: Router, private route: ActivatedRoute, public coursesService: CoursesService) {
    this.route.paramMap.subscribe( params => {
      this.id = +(params.get('id') || 0);
      this.id && this.coursesService.getItemById(this.id).subscribe((data) => {
        this.course = data || NEW_COURSE;
        this.cd.markForCheck();
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
    this.course = NEW_COURSE;
    this.cd.markForCheck();

    this.router.navigate(['']);
  }

  updateCourse() {
    if(!this.validate()) return;

    this.coursesService.updateItem(this.course).subscribe((res) => {
      if(res) {
        this.course = NEW_COURSE;
        this.cd.markForCheck();

        this.router.navigate(['']);
      }
    });
  }

  cancel() {
    this.course = NEW_COURSE;
    this.cd.markForCheck();

    this.router.navigate(['']);
  }

}
