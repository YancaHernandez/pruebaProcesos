import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const ADMIN_FEATURE_DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_FEATURE_DASHBOARD_ROUTES)],
  exports: [RouterModule]
})
export class AdminFeatureDashboardRoutingModule {}
