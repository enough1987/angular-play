import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HeaderListComponent } from './header-list.component';
import { CoursesModule } from '../../courses.module';

describe('HeaderListComponent', () => {
  let component: HeaderListComponent;
  let fixture: ComponentFixture<HeaderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderListComponent],
      imports: [CoursesModule]
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
    spyOn(console, 'log');

    p?.click();
    tick(100);

    expect(console.log).toHaveBeenCalledWith('')
  }));

  it('should add course', fakeAsync(() => {
    const nativeElement: HTMLElement = fixture.debugElement.nativeElement;
    const p = nativeElement.querySelector('[data-testid="add-course"]') as HTMLElement;
    spyOn(console, 'log');

    p?.click();
    tick(100);

    expect(console.log).toHaveBeenCalledWith('add course')
  }));
});
