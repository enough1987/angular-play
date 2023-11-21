import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './view/courses/courses.component';
import { AuthComponent } from './view/auth/components/auth/auth.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'login', component: AuthComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
