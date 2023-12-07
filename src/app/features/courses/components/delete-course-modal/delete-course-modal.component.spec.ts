import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteCourseModalComponent } from './delete-course-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';

describe('DeleteCourseModalComponent', () => {
  let component: DeleteCourseModalComponent;
  let fixture: ComponentFixture<DeleteCourseModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
          provideAnimations()
      ],
      imports: [DeleteCourseModalComponent, BrowserAnimationsModule, CoreModule],
    });
    fixture = TestBed.createComponent(DeleteCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
