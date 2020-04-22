import { Directive, AfterViewInit } from '@angular/core';
import feather from 'feather-icons';

@Directive({
  selector: '[themeFeatherIcon]'
})
export class FeatherIconDirective implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }
}
