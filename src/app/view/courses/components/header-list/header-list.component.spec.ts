import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
