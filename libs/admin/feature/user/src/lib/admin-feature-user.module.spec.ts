import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureUserModule } from './admin-feature-user.module';

describe('AdminFeatureUserModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureUserModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminFeatureUserModule).toBeDefined();
  });
});
