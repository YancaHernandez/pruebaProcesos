import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@akaliia/shared/api-interfaces';
import { CategoryService } from '@akaliia/admin/data-access/category';

@Component({
  selector: 'akaliia-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  _category: Category;
  @Input()
  set category(category: Category) {
    this._category = category;
  }

  get category() {
    return this._category;
  }

  message: { message: string; type: string };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  submitForm(category: Category) {
    this.categoryService.update(this.category.id, category).subscribe(
      () => {
        this.message = {
          message: 'Categoria actualizada correctamente',
          type: 'success'
        };
      },
      () => {
        this.message = {
          message: 'Error al actualizar categoria',
          type: 'danger'
        };
      }
    );
  }
}
