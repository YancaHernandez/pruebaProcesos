import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';

import { CategoryBlockComponent } from './category-block.component';

describe('CategoryBlockComponent', () => {
  let component: CategoryBlockComponent;
  let fixture: ComponentFixture<CategoryBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryBlockComponent],
      imports: [SharedDataAccessApiModule.forRoot('')]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBlockComponent);
    component = fixture.componentInstance;
    component.category = { status: false };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
