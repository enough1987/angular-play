import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    SearchComponent,
    FooterComponent,
    LogoComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    SearchComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
