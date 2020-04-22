import { async, TestBed } from '@angular/core/testing';
import { SharedAdminUiDataTableModule } from './shared-admin-ui-data-table.module';

describe('SharedAdminUiDataTableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAdminUiDataTableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAdminUiDataTableModule).toBeDefined();
  });
});
