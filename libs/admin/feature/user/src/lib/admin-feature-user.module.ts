import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';

import { SharedAdminUiPagetitleModule } from '@akaliia/shared/admin/ui/pagetitle';
import { SharedAdminUiThemeModule } from '@akaliia/shared/admin/ui/theme';
import { SharedAdminUiDataTableModule } from '@akaliia/shared/admin/ui/data-table';
import { SharedAdminUiPreloaderModule } from '@akaliia/shared/admin/ui/preloader';

import { AdminFeatureUserRoutingModule } from './admin-feature-user-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserBlockComponent } from './user-block/user-block.component';

@NgModule({
  imports: [
    CommonModule,
    AdminFeatureUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedAdminUiPagetitleModule,
    SharedAdminUiPreloaderModule,
    NgxMaskModule.forRoot(),
    NgSelectModule,
    SharedAdminUiThemeModule,
    SharedAdminUiDataTableModule
  ],
  declarations: [
    UserAddComponent,
    UserListComponent,
    UserFormComponent,
    UserEditComponent,
    UserBlockComponent
  ]
})
export class AdminFeatureUserModule {}
