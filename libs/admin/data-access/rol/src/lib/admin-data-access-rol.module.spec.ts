import { async, TestBed } from '@angular/core/testing';
import { AdminDataAccessRolModule } from './admin-data-access-rol.module';

describe('AdminDataAccessRolModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminDataAccessRolModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminDataAccessRolModule).toBeDefined();
  });
});
