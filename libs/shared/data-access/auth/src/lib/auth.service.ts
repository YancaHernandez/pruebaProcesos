import { Injectable } from '@angular/core';
import { AuthService as AuthServiceData } from '@akaliia/shared/data-access/api';

import { User } from '@akaliia/shared/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AuthServiceData) {}

  login(email, password) {
    return this.auth.login(email, password);
  }

  logout() {
    return this.auth.logout();
  }

  currentUser(){
    return this.auth.getCurrentUser<User>();
  }
}
