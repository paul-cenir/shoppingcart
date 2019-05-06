import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
    headerData: string;
    headerUserLoggedIn: boolean;
    constructor(private AuthService: AuthService, private Router: Router) {
        this.AuthService.headerUserLoggedIn.subscribe( resp => {
            const accountData = this.AuthService.parseAccessTokenData();
            if (this.AuthService.isLoggedIn()) {
                this.headerData = 'logout ' + accountData.data.first_name;
            } else {
                this.headerData = 'login';
            }
        });
     }
    ngOnInit() {

    }

    logout() {
        const tokenDeleted = this.AuthService.deleteAccessToken();
        tokenDeleted.subscribe(res => this.Router.navigateByUrl('/homepage') );
        this.AuthService.headerUserLoggedIn.next(false);
    }
}
