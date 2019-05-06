import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShipmentService } from './shipment.service';
import { CartService } from 'src/app/shared-module/services/cart.service';
import { ConfigService } from 'src/app/shared-module/services/config.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-shipment',
    templateUrl: './shipment.component.html',
    styleUrls: ['./shipment.component.less']
})
export class ShipmentComponent implements OnInit {
    shipmentForm: FormGroup;
    isSubmitted = false;
    shipmentRate: any;
    constructor(
        private FormBuilder: FormBuilder,
        private ShipmentService: ShipmentService,
        private CartService: CartService,
        private ConfigService: ConfigService,
        private Router: Router,
    ) { }

    ngOnInit() {
        this.validationForm();
        this.getShipment();
    }

    get formControls() { return this.shipmentForm.controls; }

    public validationForm() {
        this.shipmentForm = this.FormBuilder.group({
            shipping_name: ['', [Validators.required,Validators.maxLength(35)]],
            shipping_address1: ['',[Validators.required,Validators.maxLength(35)] ],
            shipping_address2: ['', [Validators.maxLength(35)]],
            shipping_address3: ['', [Validators.maxLength(35)]],
            shipping_city: ['', [Validators.required,Validators.maxLength(35)]],
            shipping_state: ['', [Validators.required,Validators.maxLength(35)]],
            shipping_country: ['', [Validators.required,Validators.maxLength(35)]],
            shipping_mehod: ['', [Validators.required]],
            cart_id: [this.CartService.getCartId(), []]
        });
    } 

    getShipment(): void {
        const id = +this.CartService.getCartId();
        this.ShipmentService.getShipmentRate(id)
            .subscribe(result => {
                console.log(result);
                this.shipmentRate = result['data'];
            });
    }

    public addShipping(): void {
        this.isSubmitted = true;
        if (this.shipmentForm.invalid) {
            return;
        }
        const shipmentData: any = this.shipmentForm.value;
        this.ShipmentService.addShipment(shipmentData)
            .subscribe(
                result => {
                    this.Router.navigateByUrl('/payment');
                },
                error => {
                    
                }
            );
    }

}
