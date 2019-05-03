import { RegistrationService } from './registration.service';
import { User } from './../../../shared-module/models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared-module/helpers/must-match.validator';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
    user: User[];
    constructor(
        private AuthService: AuthService,
        private Router: Router,
        private FormBuilder: FormBuilder,
        private RegistrationService: RegistrationService
    ) {

    }
    registrationForm: FormGroup;
    notValidAccount: boolean;
    isSubmitted = false;
    ngOnInit() {
        this.registrationForm = this.FormBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirm_password: ['', Validators.required],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            company_name: ['', ]
        }, {
            validator: MustMatch('password', 'confirm_password')
        });
    }
    get formControls() { return this.registrationForm.controls; }

    public register() {
        this.isSubmitted = true;
        if (this.registrationForm.invalid) {
            return;
        }
        const userLogin: User = this.registrationForm.value as User;
        this.RegistrationService.register(userLogin)
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
