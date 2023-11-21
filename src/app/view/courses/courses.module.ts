import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { ListComponent } from './components/list/list.component';
import { HeaderListComponent } from './components/header-list/header-list.component';
import { FooterListComponent } from './components/footer-list/footer-list.component';
import { CreationDateDirective } from './directives/creation-date.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

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
    SharedModule
  ],
  exports: [
    CoursesComponent,
  ]
})
export class CoursesModule { }
