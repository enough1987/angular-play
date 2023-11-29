import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/declarations';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  authenticated = false;
  user: User = {
    email: '',
    password: '',
  } as User;

  constructor(private router: Router, public authServiceService: AuthServiceService) {
    authServiceService.isAuthenticated().subscribe((authenticated) => {
      this.authenticated = authenticated;
    });
  }

  login() {
    if(!this.user.email || !this.user.password) {
      console.error('there are no email or password');
      return;
    }
    this.authServiceService.login(this.user)
    this.router.navigate(['']);
  }
}
