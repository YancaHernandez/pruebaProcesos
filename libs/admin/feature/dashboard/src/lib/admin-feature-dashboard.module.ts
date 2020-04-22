import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminFeatureDashboardRoutingModule } from './admin-feature-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, AdminFeatureDashboardRoutingModule],
  declarations: [DashboardComponent]
})
export class AdminFeatureDashboardModule {}
