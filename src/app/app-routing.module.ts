import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './view/courses/courses.component';
import { AuthComponent } from './view/auth/components/auth/auth.component';
import { CourseComponent } from './view/course/components/course/course.component';
import { NotFoundComponent } from './view/not-found/components/not-found/not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/new', component: CourseComponent },
  { path: 'courses/:id', component: CourseComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
