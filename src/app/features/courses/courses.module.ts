import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { CoursesComponent } from './courses.component';
import { HeaderListComponent } from './components/header-list/header-list.component';
import { FooterListComponent } from './components/footer-list/footer-list.component';
import { CreationDateDirective } from './directives/creation-date.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    CoursesComponent,
    ListComponent,
    ItemListComponent,
    HeaderListComponent,
    FooterListComponent,
    CreationDateDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
  ],
  imports: [
    CoreModule,
  ],
  exports: [
    CoursesComponent,
  ]
})
export class CoursesModule { }
