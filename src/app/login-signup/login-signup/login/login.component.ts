import { User } from './../../../shared-module/models/user';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    user: User[];
    constructor(
        private AuthService: AuthService,
        private Router: Router,
        private FormBuilder: FormBuilder,
        private LoginService: LoginService
    ) {

    }
    loginForm: FormGroup;
    isSubmitted = false;
    notValidAccount: boolean;
    ngOnInit() {
        this.loginForm = this.FormBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
    get formControls() { return this.loginForm.controls; }

    public login(): void {
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        const userLogin: User = this.loginForm.value as User;
        this.LoginService.login(userLogin)
            .subscribe(
                result => {
                    // Handle result
                    this.notValidAccount = false;
                    this.AuthService.setAccessToken(result.data);
                    this.Router.navigateByUrl('/homepage');
                    this.AuthService.isUserLoggedIn.next(true);
                },
                error => {
                    if (error.error.validation_error_messages) {
                        this.notValidAccount = true;
                    }
                }
            );
    }

}
