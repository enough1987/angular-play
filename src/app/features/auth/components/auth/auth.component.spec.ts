import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthViewComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';

describe('AuthComponent', () => {
  let component: AuthViewComponent;
  let fixture: ComponentFixture<AuthViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthViewComponent],
      imports: [
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(AuthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
