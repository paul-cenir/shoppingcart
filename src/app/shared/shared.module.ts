import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { SiteImageComponent } from './components/site-image/site-image.component';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
    ],
    declarations: [
        OrderDetailComponent,
        ConfirmationDialogComponent,
        SiteImageComponent,
        EmptyPageComponent
    ],
    entryComponents: [
        ConfirmationDialogComponent
    ],
    exports: [CommonModule,
        FormsModule,
        OrderDetailComponent,
        SiteImageComponent
    ]
})

export class SharedModule { }
