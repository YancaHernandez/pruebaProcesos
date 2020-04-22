import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '@akaliia/shared/admin/ui/layouts';
import { AuthGuard } from '@akaliia/shared/guards';

const ADMIN_FEATURE_SHELL_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@akaliia/admin/feature/auth').then(
        module => module.AdminFeatureAuthModule
      )
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@akaliia/admin/feature/dashboard').then(
            module => module.AdminFeatureDashboardModule
          )
      },
      {
        path: 'user',
        loadChildren: () =>
          import('@akaliia/admin/feature/user').then(
            module => module.AdminFeatureUserModule
          )
      },
      {
        path: 'category',
        loadChildren: () =>
          import('@akaliia/admin/feature/category').then(
            module => module.AdminFeatureCategoryModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_FEATURE_SHELL_ROUTES)],
  exports: [RouterModule]
})
export class AdminFeatureShellRoutingModule {}
