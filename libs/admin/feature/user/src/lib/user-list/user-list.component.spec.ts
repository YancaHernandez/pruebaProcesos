import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedAdminUiPagetitleModule } from '@akaliia/shared/admin/ui/pagetitle';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedAdminUiDataTableModule } from '@akaliia/shared/admin/ui/data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserBlockComponent } from '../user-block/user-block.component';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedAdminUiPagetitleModule,
        RouterTestingModule.withRoutes([]),
        SharedAdminUiDataTableModule,
        NgbModule,
        SharedDataAccessApiModule.forRoot('')
      ],
      declarations: [UserListComponent, UserBlockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
