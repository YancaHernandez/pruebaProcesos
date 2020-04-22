import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedAdminUiPreloaderModule } from '@akaliia/shared/admin/ui/preloader';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';

import { CategoryFormComponent } from '../category-form/category-form.component';
import { CategoryAddComponent } from './category-add.component';

describe('CategoryAddComponent', () => {
  let component: CategoryAddComponent;
  let fixture: ComponentFixture<CategoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryAddComponent, CategoryFormComponent],
      imports: [
        NgSelectModule,
        ReactiveFormsModule,
        NgbModule,
        SharedAdminUiPreloaderModule,
        SharedDataAccessApiModule.forRoot('')
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
