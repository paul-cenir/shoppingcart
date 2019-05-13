import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['../../../assets/css_min/flow-checkout/flow-checkout.min.css'
        , '../../../assets/css_min/flow-checkout/flow-checkout-mobile.min.css'],
        encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
    tableData = [];
    cartId: number;
    showCart: boolean;
    showEmptyItem: boolean;
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
        this.tableData['bodyData'] = [];
        if (this.cartId) {
            this.CartService.getCart(this.cartId)
                .subscribe(result => {
                    this.tableData = [];
                    this.tableData['bodyData'] = result['data']['cartItemData'];
                    this.tableData['footerData'] = result['data']['cartData'];
                    this.tableData['footerData']['buttonText'] = 'Checkout';
                    if (this.tableData['bodyData'].length < 1) {
                        this.showEmptyItem = true;
                    }
                });
        } else {
            this.showEmptyItem = true;
        }
    }

    checkout() {
        if (this.AuthService.isLoggedIn()) {
            this.Router.navigateByUrl('/shipment');
        } else {
            this.Router.navigateByUrl('/login-signup?originated=cart');
        }
    }

    openModal(item) {
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
                this.CartService.deleteCartItem(item['cart_item_id'])
                    .subscribe(success => {
                        this.tableData['footerData']['sub_total'] -= item['price'];
                        this.tableData['footerData']['total_amount'] -= item['price'];
                        this.tableData['footerData']['total_amount'] = this.tableData['footerData']['total_amount'].toFixed(2);
                        this.tableData['footerData']['sub_total'] = this.tableData['footerData']['sub_total'].toFixed(2);
                        const index = this.tableData['bodyData'].indexOf(item, 0);
                        this.tableData['bodyData'].splice(index, 1);
                        if (this.tableData['bodyData'].length < 1) {
                            this.showEmptyItem = true;
                        }
                        // this.getCart();
                    });
            }
        });
    }

    goToHomePage() {
        this.Router.navigateByUrl('/homepage');
    }
}
