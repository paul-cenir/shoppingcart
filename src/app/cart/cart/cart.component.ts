import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['../../../assets/css_min/flow-checkout/flow-checkout.min.css'
        , '../../../assets/css_min/flow-checkout/flow-checkout-mobile.min.css']
})
export class CartComponent implements OnInit {
    tableData: any;
    cartId: number;
    showCart: boolean;
    constructor(
        private CartService: CartService,
        private ActivatedRoute: ActivatedRoute,
        private Router: Router,
        private AuthService: AuthService,
        private ConfigService: ConfigService,
        public Dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getCart();
    }

    getCart(): void {
        this.cartId = +this.CartService.getCartId();
        if (this.cartId) {
            this.showCart = true;
            this.CartService.getCart(this.cartId)
                .subscribe(result => {
                    this.tableData = [];
                    this.tableData['bodyData'] = result['data']['cartItemData'];
                    this.tableData['footerData'] = result['data']['cartData'];
                    this.tableData['footerData']['buttonText'] = 'Checkout';
                });
        }
    }

    checkout() {
        if (this.AuthService.isLoggedIn()) {
            this.Router.navigateByUrl('/shipment');
        } else {
            this.Router.navigateByUrl('/login-signup?originated=cart');
        }
    }

    openModal(itemId) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Delete Item',
            description: 'Do you want to delete this item?',
        };
        const dialogRef = this.Dialog.open(ConfirmationDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.CartService.deleteCartItem(itemId)
                    .subscribe(success => {
                        this.getCart();
                    });
            }
        });
    }

    goToHomePage() {
        this.Router.navigateByUrl('/homepage');
    }
}
