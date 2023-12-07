import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './features/courses/courses.component';
import { AuthViewComponent } from './features/auth/components/auth/auth.component';
import { CourseComponent } from './features/course/components/course/course.component';
import { NotFoundComponent } from './features/not-found/components/not-found/not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', component: AuthViewComponent },
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
