import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpService } from '@akaliia/shared/data-access/api';
import { User } from '@akaliia/shared/api-interfaces';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpService) {}

  /**
   * Verifica si existe un correo electronico registrado
   * @param email correo electronico
   */
  getExistEmail(email: string) {
    return this.http
      .getEntries<User>(`users?email=${email}`)
      .pipe(map(data => data.length > 0));
  }

  /**
   * Registra un nuevo usuario.
   * @param data Array de todos los campos utilizado en su tabla users
   * @returns Authentication User token and profile
   */
  public register(data: any): Observable<User> {
    return this.http.createEntry<User>('auth/local/register', data);
  }

  public update(id, data: any): Observable<User> {
    return this.http.updateEntry<User>('users', id, data);
  }

  public getAll() {
    return this.http.getEntries<User>('users');
  }

  public getById(id: string) {
    return this.http.getEntry<User>('users', id);
  }
}
