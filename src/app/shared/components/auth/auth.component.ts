import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  authenticated = false;

  constructor(private router: Router, public authServiceService: AuthServiceService) {
    authServiceService.isAuthenticated().subscribe((authenticated) => {
      this.authenticated = authenticated;
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authServiceService.logout();
  }

}
