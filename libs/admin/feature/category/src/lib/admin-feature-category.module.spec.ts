import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureCategoryModule } from './admin-feature-category.module';

describe('AdminFeatureCategoryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureCategoryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminFeatureCategoryModule).toBeDefined();
  });
});
