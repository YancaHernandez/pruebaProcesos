import { async, TestBed } from '@angular/core/testing';
import { SharedAdminUiPagetitleModule } from './shared-admin-ui-pagetitle.module';

describe('SharedAdminUiPagetitleModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAdminUiPagetitleModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAdminUiPagetitleModule).toBeDefined();
  });
});
