import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-control',
  templateUrl: './auth-control.component.html',
  styleUrls: ['./auth-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthControlComponent {
  authenticated = false;

  constructor(private cd: ChangeDetectorRef, private router: Router, public authServiceService: AuthServiceService) {
    authServiceService.isAuthenticated().subscribe((authenticated) => {
      this.authenticated = authenticated;
      this.cd.markForCheck();

      if(!this.authenticated) this.router.navigate(['login']);
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authServiceService.logout();
  }

}
