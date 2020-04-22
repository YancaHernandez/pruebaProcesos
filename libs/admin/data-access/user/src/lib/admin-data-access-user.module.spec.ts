import { async, TestBed } from '@angular/core/testing';
import { AdminDataAccessUserModule } from './admin-data-access-user.module';

describe('AdminDataAccessUserModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminDataAccessUserModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminDataAccessUserModule).toBeDefined();
  });
});
