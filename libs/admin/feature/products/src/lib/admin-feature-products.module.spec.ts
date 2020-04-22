import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureProductsModule } from './admin-feature-products.module';

describe('AdminFeatureProductsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureProductsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminFeatureProductsModule).toBeDefined();
  });
});
