import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { ListComponent } from './components/list/list.component';
import { HeaderListComponent } from './components/header-list/header-list.component';
import { FooterListComponent } from './components/footer-list/footer-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoursesComponent,
    ListComponent,
    HeaderListComponent,
    FooterListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
