import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CryptoService 
{

    /**
     * Hashes input string to MD5
     *
     * @param input
     * @returns {string}
     */
    md5(input: string) 
    {
        return CryptoJS.MD5(input).toString();
    }

    /**
     * Decodes Base64UrlEncoded String
     *
     * @param input
     * @returns {any}
     */
    base64urlDecode(input: string) 
    {
        return CryptoJS.enc.Base64.parse(input).toString(CryptoJS.enc.Utf8);
    }

    /**
     * Encodes string input to a Base64UrlEncoded String
     *
     * @param input
     * @returns {string}
     */
    base64urlEncode(input: string) 
    {
        let raw_str = CryptoJS.enc.Utf8.parse(input);
        return CryptoJS.enc.Base64.stringify(raw_str);
    }
}