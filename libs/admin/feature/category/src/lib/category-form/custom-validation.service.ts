import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoryService } from '@akaliia/admin/data-access/category';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {
  constructor(private categoryService: CategoryService) {}

  existCategory(name: string, actualCategory?: string) {
    return (formGroup: FormGroup) => {
      const categoryControl = formGroup.controls[name];

      if (!categoryControl) {
        return null;
      }

      if (categoryControl.errors && !categoryControl.errors.existCategory) {
        return null;
      }

      if (actualCategory && categoryControl.value === actualCategory) {
        return null;
      }

      this.categoryService
        .getExistCategory(categoryControl.value)
        .subscribe(data => {
          if (data) {
            categoryControl.setErrors({ existCategory: true });
          } else {
            categoryControl.setErrors(null);
          }
        });
    };
  }
}
