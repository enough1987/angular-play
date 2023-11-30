import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddCourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent],
      imports: [
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
