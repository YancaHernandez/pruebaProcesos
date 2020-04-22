import { async, TestBed } from '@angular/core/testing';
import { AdminDataAccessCategoryModule } from './admin-data-access-category.module';

describe('AdminDataAccessCategoryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminDataAccessCategoryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminDataAccessCategoryModule).toBeDefined();
  });
});
