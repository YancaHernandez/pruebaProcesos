import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CategoryService } from '@akaliia/admin/data-access/category';
import { Category } from '@akaliia/shared/api-interfaces';

@Component({
  selector: 'akaliia-category-all',
  templateUrl: './category-all.component.html',
  styleUrls: ['./category-all.component.scss']
})
export class CategoryAllComponent implements OnInit {
  breadCrumbItems: Array<{}> = [{ label: 'Categorias', active: true }];
  title = 'Categorias';

  tableData: Category[];

  updateCategory: Category;

  constructor(
    private modalService: NgbModal,
    public service: CategoryService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getAll().subscribe(categories => {
      this.tableData = categories;
    });
  }

  matches(tables: Category, term: string) {
    return (
      tables.name.toLowerCase().includes(term.toLowerCase()) ||
      tables.description.toLowerCase().includes(term.toLowerCase())
    );
  }

  openModal(dataModel: any, category?: Category) {
    this.updateCategory = category;
    this.modalService.open(dataModel, { centered: true });
  }
}
