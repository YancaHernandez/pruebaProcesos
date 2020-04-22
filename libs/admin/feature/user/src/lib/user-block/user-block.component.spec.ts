import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';

import { UserBlockComponent } from './user-block.component';

describe('UserBlockComponent', () => {
  let component: UserBlockComponent;
  let fixture: ComponentFixture<UserBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedDataAccessApiModule.forRoot('')],
      declarations: [UserBlockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBlockComponent);
    component = fixture.componentInstance;
    component.user = { blocked: false };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
