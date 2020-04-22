import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const ADMIN_FEATURE_USER_ROUTES: Routes = [
  {
    path: 'add',
    component: UserAddComponent
  },
  {
    path: 'edit/:id',
    component: UserEditComponent
  },
  {
    path: '',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_FEATURE_USER_ROUTES)],
  exports: [RouterModule]
})
export class AdminFeatureUserRoutingModule {}
