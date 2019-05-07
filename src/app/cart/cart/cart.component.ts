import { ConfirmationDialogComponent } from './../../shared-module/components/confirmation-dialog/confirmation-dialog.component';
import { ConfigService } from 'src/app/shared-module/services/config.service';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared-module/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
    tableData: any;
    constructor(
        private CartService: CartService,
        private ActivatedRoute: ActivatedRoute,
        private Router: Router,
        private AuthService: AuthService,
        private ConfigService: ConfigService,
        public dialog: MatDialog
    ) { }
    ngOnInit() {
        this.getCart();
    }
    getCart(): void {
        const cartId = +this.CartService.getCartId();
        this.CartService.getCart(cartId)
            .subscribe(result => {
                this.tableData = [];
                this.tableData['bodyData'] = result['data']['cartItemData'];
                this.tableData['footerData'] = result['data']['cartData'];
                this.tableData['footerData']['buttonText'] = 'Checkout';
            });
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
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.CartService.deleteCartItem(itemId)
                    .subscribe(success => {
                        this.getCart();
                    });
            }
        });
    }
}
