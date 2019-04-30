import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuardService as LoginGuard } from './core/services/login-guard.service';

const routes: Routes = [
    {
        path: '', redirectTo: 'homepage', pathMatch: 'full'
    },
    {
        path: 'homepage',
        loadChildren: './modules/home-page/home-page.module#HomePageModule'
    },
    {
        path: 'login-signup',
        loadChildren: './modules/login-signup/login-signup.module#LoginSignupModule'
    },
    {
        path: 'product-details-page',
        loadChildren: './modules/product-details-page/product-details-page.module#ProductDetailsPageModule', canActivate: [LoginGuard]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }