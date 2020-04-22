import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAllComponent } from './category-all/category-all.component';

const ADMIN_FEATURE_CATEGORY_ROUTES: Routes = [
  {
    path: '',
    component: CategoryAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_FEATURE_CATEGORY_ROUTES)],
  exports: [RouterModule]
})
export class AdminFeatureCategoryRoutingModule {}
