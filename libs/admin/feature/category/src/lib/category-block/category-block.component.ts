import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@akaliia/shared/api-interfaces';
import { CategoryService } from '@akaliia/admin/data-access/category';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'akaliia-category-block',
  templateUrl: './category-block.component.html',
  styleUrls: ['./category-block.component.scss']
})
export class CategoryBlockComponent implements OnInit {
  titleBlock: string;

  _category: Category;

  @Input()
  set category(category: Category) {
    this._category = category;
    this.titleBlock = category.status ? 'bloquear' : 'desbloquear';
  }

  get category(): Category {
    return this._category;
  }

  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  block() {
    this.categoryService
      .update(this.category.id, { status: !this.category.status })
      .subscribe(
        () => {
          this.category.status = !this.category.status;
          this.modalService.dismissAll();
        },
        () => {}
      );
  }
}
