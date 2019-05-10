import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [HeaderComponent, FooterComponent, PageNotFoundComponent]
})
export class CoreModule { }
