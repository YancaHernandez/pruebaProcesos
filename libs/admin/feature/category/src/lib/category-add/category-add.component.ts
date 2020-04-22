import { Component, OnInit } from '@angular/core';

import { CategoryService } from '@akaliia/admin/data-access/category';
import { Category } from '@akaliia/shared/api-interfaces';

@Component({
  selector: 'akaliia-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  message: { message: string; type: string };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  submitForm(data: Category) {
    this.categoryService.add(data).subscribe(
      () => {
        this.message = {
          message: 'Categoria agregada correctamente',
          type: 'success'
        };
      },
      () => {
        this.message = {
          message: 'Error al agregar categoria',
          type: 'danger'
        };
      }
    );
  }
}
