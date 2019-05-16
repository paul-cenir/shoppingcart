import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentComponent } from './shipment/shipment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShipmentFormComponent } from './shipment/shipment-form/shipment-form.component';

@NgModule({
    declarations: [ShipmentComponent, ShipmentFormComponent],
    imports: [
        CommonModule,
        ShipmentRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})

export class ShipmentModule { }
