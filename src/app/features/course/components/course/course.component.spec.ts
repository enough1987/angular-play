import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@core/core.module';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent],
      imports: [
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule
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
