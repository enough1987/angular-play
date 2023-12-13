import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HeaderListComponent } from './header-list.component';
import { CoursesModule } from '../../courses.module';
import { Router } from '@angular/router';
import { CoursesService } from '@app/core/services/courses.service';

describe('HeaderListComponent', () => {
  let component: HeaderListComponent;
  let fixture: ComponentFixture<HeaderListComponent>;
  let mockCoursesService: CoursesService;
  let mockRouter: Router;

  beforeEach(() => {
    mockCoursesService = jasmine.createSpyObj(['changeSearch']);
    mockRouter = jasmine.createSpyObj(['navigate']);

    TestBed.configureTestingModule({
      declarations: [HeaderListComponent],
      imports: [CoursesModule],
      providers: [ 
        { provide: CoursesService, useValue: mockCoursesService },
        { provide: Router, useValue: mockRouter },
      ]
    });
    fixture = TestBed.createComponent(HeaderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search', fakeAsync(() => {
    const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
    const p = nativeElement.querySelector('[data-testid="search"]') as HTMLElement;

    p?.click();
    tick(100);

    expect(mockCoursesService.changeSearch).toHaveBeenCalledWith('');
  }));

  it('should add course', fakeAsync(() => {
    const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
    const p = nativeElement.querySelector('[data-testid="add-course"]') as HTMLElement;

    p?.click();
    tick(100);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/courses/new']);
  }));
});
