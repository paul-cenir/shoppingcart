import { FormsModule } from '@angular/forms';
import { LoginGuardService } from './core/services/login-guard.service';
import { AuthService } from './core/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from './core/interceptors/auth-http.interceptor';
import { CoreModule } from './core/core.module';


@NgModule({
    declarations: [
        AppComponent,
        // HeaderComponent,
        // FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CoreModule
    ],
    providers: [AuthService, LoginGuardService,
        // { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
