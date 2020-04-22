import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedAdminUiPagetitleModule } from '@akaliia/shared/admin/ui/pagetitle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedAdminUiDataTableModule } from '@akaliia/shared/admin/ui/data-table';
import { SharedAdminUiPreloaderModule } from '@akaliia/shared/admin/ui/preloader';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';

import { CategoryAddComponent } from '../category-add/category-add.component';
import { CategoryBlockComponent } from '../category-block/category-block.component';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { CategoryAllComponent } from './category-all.component';

describe('AllCategoryComponent', () => {
  let component: CategoryAllComponent;
  let fixture: ComponentFixture<CategoryAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryAllComponent,
        CategoryAddComponent,
        CategoryBlockComponent,
        CategoryEditComponent,
        CategoryFormComponent
      ],
      imports: [
        SharedAdminUiPagetitleModule,
        NgbModule,
        SharedAdminUiDataTableModule,
        ReactiveFormsModule,
        SharedAdminUiPreloaderModule,
        NgSelectModule,
        SharedDataAccessApiModule.forRoot('')
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
