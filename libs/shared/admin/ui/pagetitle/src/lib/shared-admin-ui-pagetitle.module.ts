import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagetitleComponent } from './pagetitle.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PagetitleComponent],
  exports: [PagetitleComponent]
})
export class SharedAdminUiPagetitleModule {}
