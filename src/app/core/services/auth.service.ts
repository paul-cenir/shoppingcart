// /**
//  * Created by prince.g on 6/3/2017.
//  */
// import { Injectable } from '@angular/core';
// import * as moment from 'moment';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { Subject } from 'rxjs';

// import { CryptoService } from './crypto.service';
// import { StorageService } from '@dri/common/services/storage.service';
// import { ConfigManagerService } from '@dri/common/services/config-manager.service';
// import { IAuthConfig } from '../configs/auth.config.interface';

// @Injectable()
// export class AuthService {
//     private AuthConfig: IAuthConfig;

//     // Observable string sources
//     public login_source = new Subject<any>();
//     public logout_source = new Subject<any>();
//     public requireLogin = new Subject<any>();

//     // Observable string streams
//     logged_in$ = this.login_source.asObservable();
//     logged_out$ = this.logout_source.asObservable();
//     requireLogin$ = this.requireLogin.asObservable();

//     constructor(
//         private Http: HttpClient,
//         private Router: Router,
//         private CryptoService: CryptoService,
//         private StorageService: StorageService,
//         private ConfigManagerService: ConfigManagerService
//     ) {
//         this.AuthConfig = this.ConfigManagerService.getConfig('auth');
//     }

//     /**
//      * Checks if authenticated
//      *
//      * @returns {boolean}
//      */
//     public isAuthenticated(): boolean {
//         let access_token = this.StorageService.getItem(this.AuthConfig.access_token_field);

//         if (!access_token) {
//             return false;
//         }

//         let data = this.parseAccessTokenData();
//         if (!data) {
//             return false;
//         }

//         return true;

//     }

//     private isAccessTokenExpired(exp) {
//         const currentTimestamp = moment().unix();
//         return currentTimestamp >= parseInt(exp);
//     }

//     public clearCredentials() {
//         let app_config = this.ConfigManagerService.getConfig('app');
//         let storage_option = {
//             path: '/',
//             domain: '.' + app_config.domain
//         };
//         this.StorageService.deleteItem(this.AuthConfig.refresh_token_field, storage_option);
//         this.StorageService.deleteItem(this.AuthConfig.access_token_field, storage_option);
//         this.StorageService.deleteItem(this.AuthConfig.access_token_expires_field, storage_option);
//     }

//     public refreshAccessToken() {
//         let app_config = this.ConfigManagerService.getConfig('app');
//         let refresh_token = this.StorageService.getItem(this.AuthConfig.refresh_token_field);
//         let endpoint = app_config.checkout_api_url + this.AuthConfig.refresh_token_url;
//         let params = {
//             client_id: this.AuthConfig.client_id,
//             client_secret: this.AuthConfig.client_secret,
//             refresh_token: refresh_token,
//             grant_type: 'refresh_token'
//         };

//         return this.Http.post(endpoint, params);
//     }

//     public saveCredentials(credentials: any) {
//         this.setAccessToken(credentials.access_token, credentials.expires_in);

//         // set refresh token on browser's storage
//         if (credentials.refresh_token != undefined) {
//             let app_config = this.ConfigManagerService.getConfig('app');
//             let storage_options = {
//                 path: '/',
//                 domain: '.' + app_config.domain,
//                 expires: moment((moment().unix() + 60 * 60 * 24 * 30 * 120) * 1000).format('ddd, DD MMM YYYY HH:mm:ss')
//             };
//             this.StorageService.setItem(
//                 this.AuthConfig.refresh_token_field,
//                 credentials.refresh_token,
//                 storage_options
//             );
//         }
//     }

//     public setAccessToken(access_token, expiresIn) {
//         let app_config = this.ConfigManagerService.getConfig('app');
//         let storage_options = {
//             path: '/',
//             domain: '.' + app_config.domain,
//             expires: ''
//         };
//         if (access_token) {
//             let access_token_data = access_token.split('.');
//             let payload = JSON.parse(this.CryptoService.base64urlDecode(access_token_data[1]));
//             let exp = payload.exp;
//             storage_options.expires = moment(exp * 1000).format('ddd, DD MMM YYYY HH:mm:ss');
//             this.StorageService.setItem(this.AuthConfig.access_token_field, access_token, storage_options);
//         }
//     }

//     public getRefreshToken() {
//         return this.StorageService.getItem(this.AuthConfig.refresh_token_field);
//     }

//     public getAccessToken() {
//         return this.StorageService.getItem(this.AuthConfig.access_token_field);
//     }

//     public parseAccessTokenData() {
//         let access_token = this.StorageService.getItem(this.AuthConfig.access_token_field);

//         if (!access_token) {
//             return false;
//         }

//         let access_token_data = access_token.split('.');
//         if (!access_token_data[1]) {
//             this.clearAccessToken();
//             return false;
//         }

//         try {
//             // try parsing header part of token to make sure it is not tampered
//             const tokenHeader = JSON.parse(this.CryptoService.base64urlDecode(access_token_data[0]));

//             const data = JSON.parse(this.CryptoService.base64urlDecode(access_token_data[1]));

//             // check if token is expired
//             if (this.isAccessTokenExpired(data.exp)) {
//                 this.clearAccessToken();
//                 return false;
//             }

//             return data;
//         } catch (e) {
//             this.clearAccessToken();
//             return false;
//         }
//     }

//     public clearAccessToken() {
//         let app_config = this.ConfigManagerService.getConfig('app');
//         let storage_option = {
//             path: '/',
//             domain: '.' + app_config.domain
//         };
//         this.StorageService.deleteItem(this.AuthConfig.access_token_field, storage_option);
//         this.StorageService.deleteItem(this.AuthConfig.access_token_expires_field, storage_option);
//     }
// }
