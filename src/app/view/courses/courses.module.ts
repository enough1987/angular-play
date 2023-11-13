import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { ListComponent } from './components/list/list.component';
import { HeaderListComponent } from './components/header-list/header-list.component';
import { FooterListComponent } from './components/footer-list/footer-list.component';
import { FormsModule } from '@angular/forms';
import { CreationDateDirective } from './directives/creation-date.directive';
import { MatIconModule } from '@angular/material/icon';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
  declarations: [
    CoursesComponent,
    ListComponent,
    HeaderListComponent,
    FooterListComponent,
    CreationDateDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
  ],
  exports: [
    CoursesComponent,
  ]
})
export class CoursesModule { }
