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
        loadChildren: './home-page/home-page.module#HomePageModule'
    },
    {
        path: 'login-signup',
        loadChildren: './login-signup/login-signup.module#LoginSignupModule', canActivate: [LoginGuard]
    },
    {
        path: 'product-details/:id',
        loadChildren: './product-details/product-details.module#ProductDetailsModule'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }