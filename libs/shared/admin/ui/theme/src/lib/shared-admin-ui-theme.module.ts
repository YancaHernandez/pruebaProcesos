import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SlimscrollDirective } from './slimscroll.directive';
import { FeatherIconDirective } from './feather-icon.directive';

@NgModule({
  declarations: [SlimscrollDirective, FeatherIconDirective],
  imports: [CommonModule],
  exports: [SlimscrollDirective, FeatherIconDirective]
})
export class SharedAdminUiThemeModule {}
