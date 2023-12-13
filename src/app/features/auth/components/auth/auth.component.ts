import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthViewComponent {
  checked = false;
  authenticated = false;
  user = {
    login: '',
    password: '',
  };

  constructor(private router: Router, public authServiceService: AuthService) {
    authServiceService.isAuthenticated().subscribe((authenticated) => {
      this.authenticated = authenticated;
      if(this.authenticated) {
        this.router.navigate(['']);
      }
    });
  }

  login() {
    if(!this.user.login || !this.user.password) {
      this.checked = true;
      return;
    }
    this.authServiceService.login(this.user.login, this.user.password);
  }
}
