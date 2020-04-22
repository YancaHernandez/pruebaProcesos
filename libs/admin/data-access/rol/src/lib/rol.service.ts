import { Injectable } from '@angular/core';
import { HttpService } from '@akaliia/shared/data-access/api';
import { Role } from '@akaliia/shared/api-interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  constructor(private http: HttpService) {}

  getRoles() {
    return this.http.getEntry<Role>('users-permissions/roles', '');
  }

  getRolWithType(type: string) {
    return this.getRoles().pipe(
      map(roles => roles.roles.filter((role: Role) => role.name === type)),
      map(roles => roles[0])
    );
  }
}
