
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
        loadChildren: './home-page/home-page.module#HomePageModule'
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
        loadChildren: './cart/cart.module#CartModule'
    },
    {
        path: 'shipment',
        loadChildren: './shipment/shipment.module#ShipmentModule', canActivate: [AuthGuard]
    },
    {
        path: 'payment',
        loadChildren: './payment/payment.module#PaymentModule', canActivate: [AuthGuard]
    },
    {
        path: 'job-order/:id',
        loadChildren: './job-order/job-order.module#JobOrderModule', canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: 'homepage' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }