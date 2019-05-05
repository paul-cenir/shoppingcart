import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartJobTableComponent } from './components/cart-job-table/cart-job-table.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [CartJobTableComponent],
    exports: [CommonModule, FormsModule,CartJobTableComponent]
})
export class SharedModule { }