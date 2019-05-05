
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './core/services/auth-guard.service';
import { LoginGuardService as LoginGuard } from './core/services/login-guard.service';


const routes: Routes = [
    {
        path: '', redirectTo: 'homepage', pathMatch: 'full'
    },
    {
        path: 'homepage',
        loadChildren: './home-page/home-page.module#HomePageModule'/*, canActivate: [AuthGuard]*/
    },
    {
        path: 'login-signup',
        loadChildren: './login-signup/login-signup.module#LoginSignupModule', canActivate: [LoginGuard]
    },
    {
        path: 'product-details/:id',
        loadChildren: './product-details/product-details.module#ProductDetailsModule'
    },
    {
        path: 'cart',
        loadChildren: './cart/cart.module#CartModule', canActivate: [AuthGuard]
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }