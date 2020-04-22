import { TestBed } from '@angular/core/testing';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';

import { CustomValidationService } from './custom-validation.service';

describe('CustomValidationService', () => {
  let service: CustomValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedDataAccessApiModule.forRoot('')]
    });
    service = TestBed.inject(CustomValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
