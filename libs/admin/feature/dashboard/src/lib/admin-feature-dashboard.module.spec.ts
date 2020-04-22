import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureDashboardModule } from './admin-feature-dashboard.module';

describe('AdminFeatureDashboardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureDashboardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminFeatureDashboardModule).toBeDefined();
  });
});
