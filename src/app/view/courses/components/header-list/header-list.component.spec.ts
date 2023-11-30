import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HeaderListComponent } from './header-list.component';
import { CoursesModule } from '../../courses.module';
import { StoreService } from 'src/app/shared/services/store.service';
import { Router } from '@angular/router';

describe('HeaderListComponent', () => {
  let component: HeaderListComponent;
  let fixture: ComponentFixture<HeaderListComponent>;
  let mockStoreService: StoreService;
  let mockRouter: Router;

  beforeEach(() => {
    mockStoreService = jasmine.createSpyObj(['changeSearch']);
    mockRouter = jasmine.createSpyObj(['navigate']);

    TestBed.configureTestingModule({
      declarations: [HeaderListComponent],
      imports: [CoursesModule],
      providers: [ 
        { provide: StoreService, useValue: mockStoreService },
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

    expect(mockStoreService.changeSearch).toHaveBeenCalledWith('');
  }));

  it('should add course', fakeAsync(() => {
    const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
    const p = nativeElement.querySelector('[data-testid="add-course"]') as HTMLElement;

    p?.click();
    tick(100);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/courses/new']);
  }));
});
