import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

/**
 * Interceptar las peticiones Http para enviar el Token de autenticación
 */
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  /**
   * Constructor por defecto
   * @param auth Servicio de Autenticación
   */
  constructor(private auth: AuthService) {}

  /**
   * Intercepción de la petición
   * @param request Petición
   * @param next Como resolver la petición
   * @returns Retorna la petición interceptada
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
