import { CartService } from '../../../shared/services/cart.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    headerData: string;
    headerUserLoggedIn: boolean;
    accountData: any;
    constructor(private AuthService: AuthService, private Router: Router, private CartService: CartService) {
        this.AuthService.headerUserLoggedIn.subscribe(resp => {
            this.accountData = this.AuthService.parseAccessTokenData();
            if (this.AuthService.isLoggedIn()) {
                this.headerData = 'logout ';
            } else {
                this.headerData = 'login';
            }
        });
    }

    ngOnInit() {

    }

    goToHomePage() {
        this.Router.navigateByUrl('/homepage');
        this.AuthService.headerUserLoggedIn.next(false);
    }

    logout() {
        const tokenDeleted = this.AuthService.deleteAccessToken();
        const cartId = +this.CartService.getCartId();
        tokenDeleted.subscribe(
            res => {
                if (cartId) {
                    this.CartService.deleteCart(cartId).subscribe(
                        result => {
                            this.CartService.deleteCartId();
                            this.goToHomePage();
                        });
                } else {
                    this.goToHomePage();
                }
            });
    }
}
