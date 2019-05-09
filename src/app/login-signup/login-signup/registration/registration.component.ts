import { RegistrationService } from './registration.service';
import { User } from '../../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/shared/helpers/must-match.validator';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
    user: User[];
    originated: String;
    registrationForm: FormGroup;
    notValidAccount: boolean;
    isSubmitted = false;
    constructor(
        private AuthService: AuthService,
        private Router: Router,
        private FormBuilder: FormBuilder,
        private RegistrationService: RegistrationService,
        private ActivedRoute: ActivatedRoute
    ) {
        this.ActivedRoute.queryParams.subscribe(params => {
            this.originated = params['originated'];
        });
    }

    ngOnInit() {
        this.registrationForm = this.FormBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirm_password: ['', Validators.required],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            company_name: ['',]
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
        const originatedUrl = this.originated;
        this.RegistrationService.register(userLogin)
            .subscribe(
                result => {
                    this.AuthService.setAccessToken(result['data'])
                        .subscribe(res => {
                            if (originatedUrl == "cart") {
                                this.Router.navigateByUrl('/shipment');
                            } else {
                                this.Router.navigateByUrl('/homepage');
                            }
                        });
                    this.AuthService.headerUserLoggedIn.next(true);
                    this.notValidAccount = false;
                },
                error => {
                    if (error.error.validation_error_messages) {
                        this.notValidAccount = true;
                    }
                }
            );

    }

}
