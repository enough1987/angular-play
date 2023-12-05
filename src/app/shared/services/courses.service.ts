/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../declarations';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  start = 0;
  count = 3;
  course = new BehaviorSubject<Course | null>(null);
  course$ = this.course.asObservable();
  courses = new BehaviorSubject<Course[] | null>(null);
  courses$ = this.courses.asObservable();

  constructor(private http: HttpClient) {}

  getList(): Observable<Course[] | null> {
    const req = this.http.get<Course[]>('http://localhost:3004/courses?start='+ this.start + '&count=' + this.count);
    req.subscribe((res) => {
      this.courses.next(res);
    });
    return this.courses$;
  }

  getItemById(id: number): Observable<Course | null> {
    const req = this.http.get<Course>('http://localhost:3004/courses/' + id);
    req.subscribe((res) => {
      this.course.next(res);
    });
    return this.course$;
  }

  createCourse(course: Course): Observable<boolean> {
    const updated = new BehaviorSubject<boolean>(false);
    const updated$ = updated.asObservable();

    const req = this.http.post<Course>('http://localhost:3004/courses', course);
    req.subscribe((res) => {
      updated.next(true);

      console.log(1, res);

      this.courses$.pipe(
        map((courses) => [res, ...(courses as Course[])]),
      )
      .subscribe(courses => this.courses.next(courses as Course[]))
      .unsubscribe();
    });

    return updated$;
  }

  updateItem(course: Course): Observable<boolean> {
    const updated = new BehaviorSubject<boolean>(false);
    const updated$ = updated.asObservable();

    const req = this.http.patch<Course>('http://localhost:3004/courses/' + course.id, course);
    req.subscribe((res) => {
      updated.next(true);

      this.courses$.pipe(
        map((courses) => courses?.filter((course) => course.id === res.id)),
      )
      .subscribe(courses => this.courses.next(courses as Course[]))
      .unsubscribe();
    });

    return updated$;
  }

  removeItem(id: number): Observable<boolean> {
    const updated = new BehaviorSubject<boolean>(false);
    const updated$ = updated.asObservable();

    const req = this.http.delete<Course>('http://localhost:3004/courses/' + id);
    req.subscribe((res) => {
      updated.next(true);

      console.log(1, res);

      this.courses$.pipe(
        map((courses) => courses?.filter((course) => course.id !== id)),
      )
      .subscribe(courses => this.courses.next(courses as Course[]))
      .unsubscribe();
    });

    return updated$;
  }

  loadMore() {
    this.count = this.count + 3;
    this.getList();
  }
}
