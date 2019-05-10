import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        SharedModule,
        HomePageRoutingModule
    ]
})
export class HomePageModule { }
