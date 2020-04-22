import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'akaliia-page-title',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.scss']
})
export class PagetitleComponent implements OnInit {
  @Input() breadcrumbItems: Array<{
    label: string;
    path: string;
    active: boolean;
  }>;
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
