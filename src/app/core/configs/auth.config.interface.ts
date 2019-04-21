/**
 * Created by prince.g on 6/8/2017.
 */
export interface IAuthConfig 
{
    access_token_field: string,
    access_token_expires_field: string,
    refresh_token_field : string,
    grant_type: string,
    client_id : string,
    client_secret: string,
    refresh_token_url: string,
    auth_enabled_domains: Array<string>
}