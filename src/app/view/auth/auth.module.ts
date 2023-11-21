import { NgModule } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule
  ],
})
export class AuthModule { }
