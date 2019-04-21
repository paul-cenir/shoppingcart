import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginSignupRoutingModule
  ]
})
export class LoginSignupModule { }
