import { User } from '../../../shared/models/user';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    user: User[];
    originated: string;
    loginForm: FormGroup;
    isSubmitted = false;
    notValidAccount: boolean;
    constructor(
        private AuthService: AuthService,
        private Router: Router,
        private FormBuilder: FormBuilder,
        private LoginService: LoginService,
        private ActivedRoute: ActivatedRoute
    ) {
        this.ActivedRoute.queryParams.subscribe(params => {
            this.originated = params['originated'];
        });
    }

    ngOnInit() {
        this.validationForm();
    }

    public validationForm() {
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
        const originatedUrl = this.originated;
        const userLogin: User = this.loginForm.value as User;
        this.LoginService.login(userLogin)
            .subscribe(
                result => {
                    this.notValidAccount = false;
                    this.AuthService.setAccessToken(result['data'])
                        .subscribe(res => {
                            if (originatedUrl == "cart") {
                                this.Router.navigateByUrl('/shipment');
                            } else {
                                this.Router.navigateByUrl('/homepage');
                            }
                        });

                    this.AuthService.headerUserLoggedIn.next(true);
                },
                error => {
                    if (error.error.validation_error_messages) {
                        this.notValidAccount = true;
                    }
                }
            );
    }

}
