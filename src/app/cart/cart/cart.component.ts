import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared-module/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
    @Input() cartTableData: any;
    constructor(private CartService: CartService, private ActivatedRoute: ActivatedRoute,private Router: Router,private AuthService: AuthService ) { }
    ngOnInit() {
        this.getCart();
    }
    getCart(): void {
        const cartId = +this.CartService.getCartId();
        this.CartService.getCart(cartId)
            .subscribe(result => {
                this.cartTableData = [];
                this.cartTableData['bodyData'] = result['data']['cartItemData'];
                this.cartTableData['footerData'] = result['data']['cartData'];
            });
    }
    checkout() {
        if(this.AuthService.isLoggedIn()) {
            this.Router.navigateByUrl('/shipment');
        } else {
            this.Router.navigateByUrl('/login-signup?originated=cart');
        }
    }
}
