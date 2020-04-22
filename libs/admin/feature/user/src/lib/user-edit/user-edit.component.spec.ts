import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedAdminUiPagetitleModule } from '@akaliia/shared/admin/ui/pagetitle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';
import { SharedAdminUiPreloaderModule } from '@akaliia/shared/admin/ui/preloader';

import { UserFormComponent } from '../user-form/user-form.component';
import { UserEditComponent } from './user-edit.component';

describe('UserEditComponent', () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditComponent, UserFormComponent],
      imports: [
        SharedAdminUiPagetitleModule,
        NgbModule,
        ReactiveFormsModule,
        SharedDataAccessApiModule.forRoot(''),
        SharedAdminUiPreloaderModule,
        NgSelectModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    window.history.pushState({ user: { id: '' } }, '');
    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
