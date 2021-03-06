import { Injectable } from '@angular/core';

/**
 * Tratamiento del token
 */
@Injectable({
  providedIn: 'root'
})
export class JwtService {
  /**
   * Constructor
   */
  constructor() {}

  /**
   * Saber si un token ha expirado
   * @param token Token para saber si ha expirado
   * @param offsetSeconds Segundos compensados
   * @returns boolean
   */
  public isTokenExpired(token: string, offsetSeconds?: number): boolean {
    if (token == null || token === '') {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    offsetSeconds = offsetSeconds || 0;

    if (date === null) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
  }

  /**
   * Saber la fecha de expiración de un Token
   * @param token Token a ser tratado
   * @returns Fecha o Null
   */
  private getTokenExpirationDate(token: string): Date | null {
    let decoded: any;
    decoded = this.decodeToken(token);

    if (!decoded || !decoded.hasOwnProperty('exp')) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);

    return date;
  }

  /**
   * Decodificar Token
   * @param token Token a ser tratado
   */
  private decodeToken(token: string): any {
    if (token == null || token === '') {
      return null;
    }

    const parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error(
        "The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more."
      );
    }

    const decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token.');
    }

    return JSON.parse(decoded);
  }

  /**
   * decodificación url Base64
   * @param str Código
   * @returns Cadena de texto
   */
  private urlBase64Decode(str: string): string {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0: {
        break;
      }
      case 2: {
        output += '==';
        break;
      }
      case 3: {
        output += '=';
        break;
      }
      default: {
        throw new Error('Illegal base64url string!');
      }
    }
    return this.b64DecodeUnicode(output);
  }

  /**
   * Decodificación unicode base64
   * @param str Código
   * @returns decodeURIComponent
   */
  private b64DecodeUnicode(str: any) {
    return decodeURIComponent(
      Array.prototype.map
        .call(this.b64decode(str), (c: any) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  }

  /**
   * decodificación base64
   * @param str Código
   * @returns Cadena de texto
   */
  private b64decode(str: string): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = '';

    str = String(str).replace(/=+$/, '');

    if (str.length % 4 === 1) {
      throw new Error(
        "'atob' failed: The string to be decoded is not correctly encoded."
      );
    }

    for (
      // initialize result and counters
      let bc = 0, bs: any, buffer: any, idx = 0;
      // get next character
      (buffer = str.charAt(idx++));
      // character found in table? initialize bit storage and add its ascii value;
      // tslint:disable-next-line: no-bitwise
      ~buffer &&
      ((bs = bc % 4 ? bs * 64 + buffer : buffer),
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4)
        ? // tslint:disable-next-line: no-bitwise
          (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  }
}
