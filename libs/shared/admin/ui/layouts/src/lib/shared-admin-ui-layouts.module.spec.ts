import { async, TestBed } from '@angular/core/testing';
import { SharedAdminUiLayoutsModule } from './shared-admin-ui-layouts.module';

describe('SharedAdminUiLayoutsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAdminUiLayoutsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAdminUiLayoutsModule).toBeDefined();
  });
});
