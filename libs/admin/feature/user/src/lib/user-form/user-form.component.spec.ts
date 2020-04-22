import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedAdminUiPagetitleModule } from '@akaliia/shared/admin/ui/pagetitle';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedAdminUiPreloaderModule } from '@akaliia/shared/admin/ui/preloader';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';

import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [
        SharedAdminUiPagetitleModule,
        ReactiveFormsModule,
        NgbModule,
        SharedAdminUiPreloaderModule,
        NgSelectModule,
        SharedDataAccessApiModule.forRoot('')
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    component.user = { email: '' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
