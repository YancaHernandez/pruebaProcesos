import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedAdminUiLayoutsModule } from '@akaliia/shared/admin/ui/layouts';
import { SharedAdminUiPagetitleModule } from '@akaliia/shared/admin/ui/pagetitle';
import { SharedAdminUiThemeModule } from '@akaliia/shared/admin/ui/theme';
import { SharedAdminUiPreloaderModule } from '@akaliia/shared/admin/ui/preloader';

import { AdminFeatureShellRoutingModule } from './admin-feature-shell-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AdminFeatureShellRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedAdminUiThemeModule,
    SharedAdminUiLayoutsModule,
    SharedAdminUiPagetitleModule,
    SharedAdminUiPreloaderModule
  ]
})
export class AdminFeatureShellModule {}
