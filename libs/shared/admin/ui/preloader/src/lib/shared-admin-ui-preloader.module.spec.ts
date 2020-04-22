import { async, TestBed } from '@angular/core/testing';
import { SharedAdminUiPreloaderModule } from './shared-admin-ui-preloader.module';

describe('SharedAdminUiPreloaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAdminUiPreloaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAdminUiPreloaderModule).toBeDefined();
  });
});
