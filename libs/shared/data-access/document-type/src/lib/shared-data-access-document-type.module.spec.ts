import { async, TestBed } from '@angular/core/testing';
import { SharedDataAccessDocumentTypeModule } from './shared-data-access-document-type.module';

describe('SharedDataAccessDocumentTypeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedDataAccessDocumentTypeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedDataAccessDocumentTypeModule).toBeDefined();
  });
});
