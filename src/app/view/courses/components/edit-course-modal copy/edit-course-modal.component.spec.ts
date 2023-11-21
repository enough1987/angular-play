import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCourseModalComponent } from './edit-course-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

describe('DeleteCourseModalComponent', () => {
  let component: EditCourseModalComponent;
  let fixture: ComponentFixture<EditCourseModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      imports: [EditCourseModalComponent,
        BrowserModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(EditCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
