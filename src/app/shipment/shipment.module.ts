import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentRoutingModule } from './shipment-routing.module';
import { ShipmentComponent } from './shipment/shipment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ShipmentComponent],
    imports: [
        CommonModule,
        ShipmentRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})

export class ShipmentModule { }
