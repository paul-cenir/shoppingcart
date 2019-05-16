import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShipmentService } from './shipment.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Router } from '@angular/router';
import { ShipmentFormComponent } from './shipment-form/shipment-form.component';

@Component({
    selector: 'app-shipment',
    templateUrl: './shipment.component.html',
    styleUrls: ['../../../assets/css_min/flow-checkout/flow-checkout.min.css'
        , '../../../assets/css_min/flow-checkout/flow-checkout-mobile.min.css'],
    encapsulation: ViewEncapsulation.None
})

export class ShipmentComponent implements OnInit {
    @ViewChild(ShipmentFormComponent)
    private ShipmentFormComponent: ShipmentFormComponent;
    shipmentForm: FormGroup;
    isSubmitted = false;
    constructor(
        private FormBuilder: FormBuilder,
        private ShipmentService: ShipmentService,
        private CartService: CartService,
        private ConfigService: ConfigService,
        private Router: Router,
    ) { }

    ngOnInit() {

    }

    addShipping() {
        const shipmentData = this.ShipmentFormComponent.validateShipping();
        if (shipmentData) {
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
}
