import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedAdminUiPreloaderModule } from '@akaliia/shared/admin/ui/preloader';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';

import { CategoryFormComponent } from './category-form.component';

describe('CategoryFormComponent', () => {
  let component: CategoryFormComponent;
  let fixture: ComponentFixture<CategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryFormComponent],
      imports: [
        NgbModule,
        ReactiveFormsModule,
        SharedAdminUiPreloaderModule,
        NgSelectModule,
        SharedDataAccessApiModule.forRoot('')
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
