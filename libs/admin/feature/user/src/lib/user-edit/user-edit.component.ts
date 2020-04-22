import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '@akaliia/admin/data-access/user';
import { User } from '@akaliia/shared/api-interfaces';
import { map } from 'rxjs/operators';

@Component({
  selector: 'akaliia-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  /**
   * Titulo de la pagina y breadcumb
   */
  breadCrumbItems: Array<{}> = [
    { label: 'Usuarios', path: '/user' },
    { label: 'Editar', active: true }
  ];

  title = 'Editar Usuarios';

  user: User;
  message: { message: string; type: string };

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    if (this.verifyParamState()) {
      return null;
    }

    this.userService.getById(this.getIdParam()).subscribe(user => {
      this.user = user;
    });
  }

  verifyParamState() {
    if (history.state.user) {
      this.user = history.state.user;
      return true;
    }

    return false;
  }

  getIdParam() {
    let _id: string;
    this.activatedRoute.params.pipe(map(data => data['id'])).subscribe(id => {
      _id = id;
    });
    return _id;
  }

  submitForm(user: User) {
    this.userService.update(this.user.id, user).subscribe(
      () => {
        this.message = {
          message: 'Usuario actualizado correctamente',
          type: 'success'
        };
      },
      () => {
        this.message = {
          message: 'Error al actualizar usuario',
          type: 'danger'
        };
      }
    );
  }
}
