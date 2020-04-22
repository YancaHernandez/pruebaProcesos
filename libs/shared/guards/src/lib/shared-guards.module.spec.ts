import { async, TestBed } from '@angular/core/testing';
import { SharedGuardsModule } from './shared-guards.module';

describe('SharedGuardsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedGuardsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedGuardsModule).toBeDefined();
  });
});
