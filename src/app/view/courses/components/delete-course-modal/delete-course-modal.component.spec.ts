import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteCourseModalComponent } from './delete-course-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

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
      imports: [DeleteCourseModalComponent, BrowserAnimationsModule, SharedModule],
    });
    fixture = TestBed.createComponent(DeleteCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
