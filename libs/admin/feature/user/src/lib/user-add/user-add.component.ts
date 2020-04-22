import { Component, OnInit } from '@angular/core';
import { User, Role } from '@akaliia/shared/api-interfaces';
import { RolService } from '@akaliia/admin/data-access/rol';
import { UserService } from '@akaliia/admin/data-access/user';

@Component({
  selector: 'akaliia-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  /**
   * Titulo de la pagina y breadcumb
   */
  breadCrumbItems: Array<{}> = [
    { label: 'Usuarios', path: '/user' },
    { label: 'Agregar', active: true }
  ];

  title = 'Agregar Usuarios';

  user: User;
  message: { message: string; type: string };

  constructor(
    private rolService: RolService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getRolWithType();
  }

  private getRolWithType() {
    this.rolService.getRolWithType('Vendedor').subscribe((role: Role) => {
      this.user = { role: role };
    });
  }

  submitForm(data: User) {
    this.userService.register(data).subscribe(
      () => {
        this.message = {
          message: 'Usuario agregado correctamente',
          type: 'success'
        };
      },
      () => {
        this.message = {
          message: 'Error al agregar usuario',
          type: 'danger'
        };
      }
    );
  }
}
