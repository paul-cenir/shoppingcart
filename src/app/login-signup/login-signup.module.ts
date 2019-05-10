import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginComponent } from './login-signup/login/login.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { RegistrationComponent } from './login-signup/registration/registration.component';

@NgModule({
    declarations: [LoginComponent, LoginSignupComponent, RegistrationComponent],
    imports: [
        CommonModule,
        LoginSignupRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class LoginSignupModule { }
