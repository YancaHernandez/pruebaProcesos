import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminFeatureAuthRoutingModule } from './admin-feature-auth-routing.module';
import { SharedAdminUiPreloaderModule } from '@akaliia/shared/admin/ui/preloader';
import { SharedAdminUiThemeModule } from '@akaliia/shared/admin/ui/theme';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';

@NgModule({
  imports: [
    CommonModule,
    AdminFeatureAuthRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedAdminUiThemeModule,
    SharedAdminUiPreloaderModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ConfirmComponent,
    PasswordresetComponent
  ]
})
export class AdminFeatureAuthModule {}
