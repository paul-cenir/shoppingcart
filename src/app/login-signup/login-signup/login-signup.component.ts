import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-login-signup',
    templateUrl: './login-signup.component.html',
    styleUrls: ['../../../assets/css_min/page-login-signup/page-login-signup.min.css'
        , '../../../assets/css_min/page-login-signup/page-login-signup_mobile.min.css'],
        encapsulation: ViewEncapsulation.None
})
export class LoginSignupComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
