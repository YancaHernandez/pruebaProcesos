import { async, TestBed } from '@angular/core/testing';
import { SharedAdminUiThemeModule } from './shared-admin-ui-theme.module';

describe('SharedAdminUiThemeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAdminUiThemeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAdminUiThemeModule).toBeDefined();
  });
});
