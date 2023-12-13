import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-control',
  templateUrl: './auth-control.component.html',
  styleUrls: ['./auth-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthControlComponent {
  authenticated = false;

  constructor(private cd: ChangeDetectorRef, private router: Router, public authServiceService: AuthService) {
    authServiceService.isAuthenticated().subscribe((authenticated) => {
      this.authenticated = authenticated;
      this.cd.markForCheck();
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authServiceService.logout();
    this.router.navigate(['/login']);
  }

}
