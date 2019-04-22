import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { AuthGuardService as AuthGuard  } from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full'
  },
  {
    path: 'homepage', component: HomepageComponent
  },
  {
    path: 'login-signup', 
    loadChildren: './modules/login-signup/login-signup.module#LoginSignupModule',canActivate: [AuthGuard] 
  },
  {
    path: 'product-details-page', 
    loadChildren: './modules/product-details-page/product-details-page.module#ProductDetailsPageModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }