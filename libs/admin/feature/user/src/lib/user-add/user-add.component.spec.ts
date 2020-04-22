import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedAdminUiPagetitleModule } from '@akaliia/shared/admin/ui/pagetitle';
import { SharedAdminUiPreloaderModule } from '@akaliia/shared/admin/ui/preloader';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';

import { UserFormComponent } from '../user-form/user-form.component';
import { UserAddComponent } from './user-add.component';

describe('UserAddComponent', () => {
  let component: UserAddComponent;
  let fixture: ComponentFixture<UserAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddComponent, UserFormComponent],
      imports: [
        SharedAdminUiPagetitleModule,
        NgbModule,
        ReactiveFormsModule,
        SharedAdminUiPreloaderModule,
        NgSelectModule,
        SharedDataAccessApiModule.forRoot('')
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
