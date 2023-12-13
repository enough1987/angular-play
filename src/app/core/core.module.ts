import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';
import { AuthControlComponent } from './components/auth-control/auth-control.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponentComponent } from './components/spinner-component/spinner-component.component';

const MODULES = [
  CommonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatButtonModule,
  MatDatepickerModule, 
  MatNativeDateModule,
  MatCheckboxModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,

];

const COMPONENTS = [
  LogoComponent,
  AuthControlComponent,
  HeaderComponent,
  BreadcrumbsComponent,
  FooterComponent,
  SpinnerComponentComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES,
  ]
})
export class CoreModule { }
