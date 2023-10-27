import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { ListComponent } from './components/list/list.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { HeaderListComponent } from './components/header-list/header-list.component';
import { FooterListComponent } from './components/footer-list/footer-list.component';



@NgModule({
  declarations: [
    CoursesComponent,
    ListComponent,
    ItemListComponent,
    HeaderListComponent,
    FooterListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
