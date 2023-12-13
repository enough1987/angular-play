import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './features/courses/courses.component';
import { AuthViewComponent } from './features/auth/components/auth/auth.component';
import { CourseComponent } from './features/course/components/course/course.component';
import { NotFoundComponent } from './features/not-found/components/not-found/not-found.component';
import { AuthService } from '@app/core/services/auth.service';

const canActivateFn = () => {
  return () => {
    const isAuthenticated = inject(AuthService).isAuthenticatedSync();
    const router: Router = inject(Router);
    
    return isAuthenticated || router.createUrlTree(['login']);
  };
};

const routes: Routes = [
  { path: '',   redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', component: AuthViewComponent },
  { path: 'courses', component: CoursesComponent, canActivate: [canActivateFn()] },
  { path: 'courses/new', component: CourseComponent, canActivate: [canActivateFn()] },
  { path: 'courses/:id', component: CourseComponent, canActivate: [canActivateFn()] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
