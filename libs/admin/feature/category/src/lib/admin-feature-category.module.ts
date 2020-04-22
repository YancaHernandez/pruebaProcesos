import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { SharedAdminUiPagetitleModule } from '@akaliia/shared/admin/ui/pagetitle';
import { SharedAdminUiThemeModule } from '@akaliia/shared/admin/ui/theme';
import { SharedAdminUiPreloaderModule } from '@akaliia/shared/admin/ui/preloader';
import { SharedAdminUiDataTableModule } from '@akaliia/shared/admin/ui/data-table';

import { AdminFeatureCategoryRoutingModule } from './admin-feature-category-routing.module';
import { CategoryAllComponent } from './category-all/category-all.component';
import { CategoryAddComponent } from './category-add/category-add.component';

import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryBlockComponent } from './category-block/category-block.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AdminFeatureCategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedAdminUiThemeModule,
    SharedAdminUiPagetitleModule,
    SharedAdminUiPreloaderModule,
    NgSelectModule,
    SharedAdminUiDataTableModule
  ],
  declarations: [
    CategoryAllComponent,
    CategoryAddComponent,
    CategoryFormComponent,
    CategoryBlockComponent,
    CategoryEditComponent
  ]
})
export class AdminFeatureCategoryModule {}
