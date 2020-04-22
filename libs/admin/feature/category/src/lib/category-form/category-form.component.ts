import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterContentInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { Category } from '@akaliia/shared/api-interfaces';
import { CustomValidationService } from './custom-validation.service';

@Component({
  selector: 'akaliia-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit, AfterContentInit {
  @Input() type: 'create' | 'update';

  @Input() category: Category;

  categoryForm: FormGroup;

  _message: { message: string; type: string };
  @Input()
  set message(message: { message: string; type: string }) {
    this._message = message;
    this.loading = false;

    if (message?.type === 'success' && this.type === 'create') {
      this.setInfo();
      this.categoryForm.markAsUntouched();
    }
  }

  get message() {
    return this._message;
  }

  @Output() data = new EventEmitter<Category>();

  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomValidationService
  ) {}

  ngOnInit(): void {
    this.generateForm();
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.setInfo();
    }, 1);
  }

  private generateForm() {
    this.categoryForm = this.fb.group(
      {
        name: new FormControl('', {
          validators: [Validators.required],
          updateOn: 'blur'
        }),
        description: new FormControl('', [Validators.required]),
        status: new FormControl(false, [Validators.required])
      },
      {
        validator: [
          this.customValidator.existCategory('name', this.category?.name)
        ]
      }
    );
  }

  private setInfo() {
    this.categoryForm.patchValue({
      name: this.category?.name || '',
      description: this.category?.description || '',
      status: this.category?.status || false
    });
  }

  submitForm() {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }

    this.data.emit(this.categoryForm.value);
    this.loading = true;
  }
}
