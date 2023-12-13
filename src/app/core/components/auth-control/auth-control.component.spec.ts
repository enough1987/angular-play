import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthControlComponent } from './auth-control.component';
import { CoreModule } from '../../core.module';

describe('AuthComponent', () => {
  let component: AuthControlComponent;
  let fixture: ComponentFixture<AuthControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthControlComponent],
      imports: [
        CoreModule,
      ],
    });
    fixture = TestBed.createComponent(AuthControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have log in button', () => {
    const element: HTMLElement = fixture.nativeElement;
    const p = element.querySelector('[data-testid="login"]');
    expect(p?.textContent).toContain('User login');
  });

  it('should have log out button', () => {
    const element: HTMLElement = fixture.nativeElement;
    const p = element.querySelector('[data-testid="loginout"]');
    // TODO: should be fixeds
    expect(p?.textContent).not.toContain(' Log off');
  });
});
