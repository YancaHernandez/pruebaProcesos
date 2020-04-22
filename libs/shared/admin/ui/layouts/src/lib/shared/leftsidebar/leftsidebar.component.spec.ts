import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from '../menu/menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';

import { LeftsidebarComponent } from './leftsidebar.component';

describe('LeftsidebarComponent', () => {
  let component: LeftsidebarComponent;
  let fixture: ComponentFixture<LeftsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeftsidebarComponent, MenuComponent],
      imports: [RouterTestingModule, SharedDataAccessApiModule.forRoot('')]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
