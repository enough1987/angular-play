import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '@core/services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthViewComponent {
  authenticated = false;
  user = {
    login: '',
    password: '',
  };

  constructor(private router: Router, public authServiceService: AuthServiceService) {
    authServiceService.isAuthenticated().subscribe((authenticated) => {
      this.authenticated = authenticated;
      if(this.authenticated) {
        this.router.navigate(['']);
      }
    });
  }

  login() {
    if(!this.user.login || !this.user.password) {
      console.error('there are no email or password');
      return;
    }
    this.authServiceService.login(this.user.login, this.user.password);
  }
}
