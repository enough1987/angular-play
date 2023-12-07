import { NgModule } from '@angular/core';
import { AuthViewComponent } from './components/auth/auth.component';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    AuthViewComponent
  ],
  imports: [
    CoreModule
  ],
})
export class AuthModule { }
