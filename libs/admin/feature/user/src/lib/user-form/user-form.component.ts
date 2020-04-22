import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  AfterContentInit
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';
import { CustomValidationService } from './custom-validation.service';
import { DocumentTypeService } from '@akaliia/shared/data-access/document-type';
import { User, DocumentType } from '@akaliia/shared/api-interfaces';

@Component({
  selector: 'akaliia-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, AfterContentInit {
  /**
   * Titulo de la pagina y breadcumb
   */

  @Input() title = '';

  @Input() type: 'create' | 'update';

  @Input() breadCrumbItems: Array<{}>;

  @Input() user: User;

  _message: { message: string; type: string };
  @Input()
  set message(message: { message: string; type: string }) {
    this._message = message;
    this.loading = false;

    if (message?.type === 'success' && this.type === 'create') {
      this.setInfo();
      this.userForm.markAsUntouched();
    }
  }

  get message() {
    return this._message;
  }

  @Output() data = new EventEmitter<User>();

  documentTypesLoading = false;
  /**
   * Variables y declaraciones necesarias para el componente
   */
  userForm: FormGroup;

  address: FormArray;

  documentTypes: DocumentType[];

  loading: boolean;

  constructor(
    private documentTypeService: DocumentTypeService,
    private fb: FormBuilder,
    private customValidator: CustomValidationService
  ) {}

  ngOnInit(): void {
    this.generateForm();
    this.getDocumentTypes();
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.setInfo();
    }, 1);
  }

  private generateForm() {
    this.userForm = this.fb.group(
      {
        username: new FormControl('', [Validators.minLength(3)]),
        email: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.email
          ],
          updateOn: 'blur'
        }),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ]),
        role: new FormControl('', [Validators.required]),
        firstname: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        document: new FormControl('', [Validators.required]),
        document_type: new FormControl('', [Validators.required]),
        telephone: new FormControl('', [Validators.required]),
        address: this.fb.array([
          this.fb.group({
            __component: 'address.address',
            Street: new FormControl('', [Validators.required])
          })
        ])
      },
      {
        validator: [
          this.customValidator.MatchPassword('password', 'confirmPassword'),
          this.customValidator.UsedEmail('email', this.user.email)
        ]
      }
    );

    this.address = this.userForm.get('address') as FormArray;
  }

  private setInfo() {
    this.userForm.patchValue({
      password: '',
      confirmPassword: '',
      username: this.user.username || '',
      email: this.user.email || '',
      role: this.user.role?.id || '',
      document_type: this.user.document_type?.id || '',
      document: this.user.document || '',
      firstname: this.user.firstname || '',
      lastname: this.user.lastname || '',
      telephone: this.user.telephone || '',
      address: [
        {
          Street: this.user.address ? this.user.address[0].Street : ''
        }
      ]
    });

    if (this.type === 'update') {
      this.userForm.removeControl('password');
      this.userForm.removeControl('confirmPassword');
    }
  }

  private getDocumentTypes() {
    this.documentTypesLoading = true;
    this.documentTypeService.getDocuments().subscribe(data => {
      this.documentTypes = data;
      this.documentTypesLoading = false;
    });
  }

  submitForm() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    if (!this.userForm.value.username) {
      this.userForm.patchValue({ username: this.userForm.value.email });
    }

    this.data.emit(this.userForm.value);
    this.loading = true;
  }
}
