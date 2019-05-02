import { AuthGuardService } from './core/services/auth-guard.service';
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
        loadChildren: './modules/login-signup/login-signup.module#LoginSignupModule', canActivate: [LoginGuard]
    },
    {
        path: 'product-details/:id',
        loadChildren: './modules/product-details-page/product-details-page.module#ProductDetailsPageModule'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }