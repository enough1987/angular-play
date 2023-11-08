import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../../shared.module';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(AuthComponent);
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
    expect(p?.textContent).toContain(' Log off');
  });
});
