import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureAuthModule } from './admin-feature-auth.module';

describe('AdminFeatureAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminFeatureAuthModule).toBeDefined();
  });
});
