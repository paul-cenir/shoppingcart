import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartJobTableComponent } from './components/cart-job-table/cart-job-table.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        // BrowserAnimationsModule

    ],
    declarations: [
        CartJobTableComponent,
        ConfirmationDialogComponent
    ],
    entryComponents: [
        ConfirmationDialogComponent
    ],
    exports: [CommonModule,
        FormsModule,
        CartJobTableComponent
    ]
})
export class SharedModule { }