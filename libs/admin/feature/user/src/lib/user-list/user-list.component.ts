import { Component, OnInit, PipeTransform } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from '@akaliia/shared/api-interfaces';
import { UserService } from '@akaliia/admin/data-access/user';

@Component({
  selector: 'akaliia-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  /**
   * Titulo de la pagina y breadcumb
   */
  breadCrumbItems: Array<{}> = [
    { label: 'Usuarios', path: '' },
    { label: 'Lista', active: true }
  ];
  title = 'Lista de usuarios';

  userBlock: User;

  public tableData: User[];

  constructor(private modalService: NgbModal, private service: UserService) {}

  ngOnInit() {
    this.getData();
  }

  openModal(dataModel: any, user: User) {
    this.userBlock = user;
    this.modalService.open(dataModel, { centered: true });
  }

  getData() {
    this.service.getAll().subscribe(data => {
      this.tableData = data;
    });
  }

  matches(tables: User, term: string, pipe: PipeTransform) {
    return (
      tables.document.toLowerCase().includes(term.toLowerCase()) ||
      tables.username.toLowerCase().includes(term.toLowerCase()) ||
      tables.firstname.toLowerCase().includes(term.toLowerCase()) ||
      tables.lastname.toLowerCase().includes(term.toLowerCase()) ||
      tables.document.toLowerCase().includes(term.toLowerCase()) ||
      tables.email.toLowerCase().includes(term.toLowerCase())
    );
  }
}
