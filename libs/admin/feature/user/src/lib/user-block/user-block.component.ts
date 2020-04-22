import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@akaliia/admin/data-access/user';
import { User } from '@akaliia/shared/api-interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'akaliia-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss']
})
export class UserBlockComponent implements OnInit {
  titleBlock: string;

  _user: User;

  @Input()
  set user(user: User) {
    this._user = user;
    this.titleBlock = !user.blocked ? 'bloquear' : 'desbloquear';
  }

  get user(): User {
    return this._user;
  }

  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  block() {
    this.userService
      .update(this.user.id, { blocked: !this.user.blocked })
      .subscribe(
        () => {
          this.user.blocked = !this.user.blocked;
          this.modalService.dismissAll();
        },
        () => {}
      );
  }
}
