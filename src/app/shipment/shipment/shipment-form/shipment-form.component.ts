import { ShipmentService } from './../shipment.service';
import { CartService } from './../../../shared/services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-shipment-form',
    templateUrl: './shipment-form.component.html',
    styleUrls: ['./shipment-form.component.less']
})
export class ShipmentFormComponent implements OnInit {
    shipmentForm: FormGroup;
    isSubmitted = false;
    shipmentRate: any;
    @Output() triggerClick = new EventEmitter();
    constructor(
        private FormBuilder: FormBuilder,
        private CartService: CartService,
        private ShipmentService: ShipmentService,
    ) { }

    ngOnInit() {
        this.validationForm();
        this.getShipment();
    }

    getShipment(): void {
        const id = +this.CartService.getCartId();
        this.ShipmentService.getShipmentRate(id)
            .subscribe(result => {
                this.shipmentRate = result['data'];
            });
    }

    get formControls() { return this.shipmentForm.controls; }

    public validationForm() {
        this.shipmentForm = this.FormBuilder.group({
            shipping_name: ['', [Validators.required, Validators.maxLength(35)]],
            shipping_address1: ['', [Validators.required, Validators.maxLength(35)]],
            shipping_address2: ['', [Validators.maxLength(35)]],
            shipping_address3: ['', [Validators.maxLength(35)]],
            shipping_city: ['', [Validators.required, Validators.maxLength(35)]],
            shipping_state: ['', [Validators.required, Validators.maxLength(35)]],
            shipping_country: ['', [Validators.required, Validators.maxLength(35)]],
            shipping_mehod: ['', [Validators.required]],
            cart_id: [this.CartService.getCartId(), []]
        });
    }

    public validateShipping() {
        this.isSubmitted = true;
        if (this.shipmentForm.invalid) {
            return;
        }
        return this.shipmentForm.value;
    }

    clickEvent() {
        this.triggerClick.emit();
    }

}
