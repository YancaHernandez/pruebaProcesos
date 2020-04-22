import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { SortableDirective } from './data-table/sortable.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgbPaginationModule,
  NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule
  ],
  declarations: [DataTableComponent, SortableDirective],
  exports: [DataTableComponent, SortableDirective]
})
export class SharedAdminUiDataTableModule {}
