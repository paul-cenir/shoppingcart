import { AuthGuardService } from './core/services/auth-guard.service';
import { MessageService } from './shared/services/message.service';
import { HttpErrorHandler } from './shared/services/http-error-handler.service';
import { FormsModule } from '@angular/forms';
import { LoginGuardService } from './core/services/login-guard.service';
import { AuthService } from './core/services/auth.service';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from './core/interceptors/auth-http.interceptor';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CoreModule,
    ],
    providers: [AuthService, LoginGuardService, AuthGuardService, HttpErrorHandler, MessageService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
