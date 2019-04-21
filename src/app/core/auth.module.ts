/**
 * Created by prince.g on 6/3/2017.
 */

import {ModuleWithProviders, NgModule} from "@angular/core";
import {CryptoService} from "./services/crypto.service";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {LoginGuardService} from "./services/login-guard.service";

@NgModule(
    {
        imports: [],
        declarations: [],
        providers: [
            AuthService,
            CryptoService,
            AuthGuardService,
            LoginGuardService,
        ],
        exports: [],
    }
)
export class AuthModule 
{
}
