import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

@NgModule({
  declarations: [LoginComponent, LoginSignupComponent],
  imports: [
    CommonModule,
    LoginSignupRoutingModule
  ]
})
export class LoginSignupModule { }
