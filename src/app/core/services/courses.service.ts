/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Course } from '../../models';
import { tap } from 'rxjs/internal/operators/tap';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  start = 0;
  count = 6;
  textFragment = '';

  search = new BehaviorSubject('');
  search$ = this.search.asObservable();

  course = new BehaviorSubject<Course | null>(null);
  course$ = this.course.asObservable();

  courses = new BehaviorSubject<Course[] | null>(null);
  courses$ = this.courses.asObservable();

  constructor(private http: HttpClient, private loadingService: LoadingService) {
    this.search$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap((textFragmentValue) => this.textFragment = textFragmentValue),
      switchMap(() => this.getList())
    ).subscribe();
  }

  canLoad() {
    const load = new BehaviorSubject<boolean>(false);
    const load$ = load.asObservable();

    this.courses$.subscribe((data) => {
      if((data?.length || 0) < this.count) {
        load.next(false);
      } else {
        load.next(true);
      }
    })

    return load$;
  }

  changeSearch(text: string) {
    if(text?.trim().length > 3) {
      this.search.next(text?.trim());
    } else if(text?.trim()){
      this.search.next(text?.trim());
    }
  }

  getList(): Observable<Course[] | null> {
    this.loadingService.setLoading(true);

    const req = this.http.get<Course[]>(
      'http://localhost:3004/courses?start='+ this.start + '&count=' + this.count + '&textFragment=' + this.textFragment
    );
    req.subscribe((res) => {
      this.courses.next(res);
      this.loadingService.setLoading(false);
    });
    return this.courses$;
  }

  getItemById(id: number): Observable<Course | null> {
    this.loadingService.setLoading(true);
    const req = this.http.get<Course>('http://localhost:3004/courses/' + id);
    req.subscribe((res) => {
      this.course.next(res);
      this.loadingService.setLoading(false);
    });
    return this.course$;
  }

  createCourse(course: Course): Observable<boolean> {
    this.loadingService.setLoading(true);
    const updated = new BehaviorSubject<boolean>(false);
    const updated$ = updated.asObservable();

    const req = this.http.post<Course>('http://localhost:3004/courses', course);
    req.subscribe((res) => {
      updated.next(true);

      this.courses.pipe(tap(courses => {
        courses?.push(res);
      }));
      this.loadingService.setLoading(false);
    });

    return updated$;
  }

  updateItem(course: Course): Observable<boolean> {
    this.loadingService.setLoading(true);
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
      this.loadingService.setLoading(false);
    });

    return updated$;
  }

  removeItem(id: number): Observable<boolean> {
    this.loadingService.setLoading(true);
    const updated = new BehaviorSubject<boolean>(false);
    const updated$ = updated.asObservable();

    const req = this.http.delete<Course>('http://localhost:3004/courses/' + id);
    req.subscribe(() => {
      updated.next(true);

      this.courses$.pipe(
        map((courses) => courses?.filter((course) => course.id !== id)),
      )
      .subscribe(courses => this.courses.next(courses as Course[]))
      .unsubscribe();
      this.loadingService.setLoading(false);
    });

    return updated$;
  }

  loadMore() {
    this.count = this.count + 3;
    this.getList();
  }
}
