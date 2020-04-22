import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopbarComponent } from '../shared/topbar/topbar.component';
import { LeftsidebarComponent } from '../shared/leftsidebar/leftsidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from '../shared/menu/menu.component';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';

import { VerticalComponent } from './vertical.component';

describe('VerticalComponent', () => {
  let component: VerticalComponent;
  let fixture: ComponentFixture<VerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VerticalComponent,
        TopbarComponent,
        LeftsidebarComponent,
        FooterComponent,
        MenuComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        SharedDataAccessApiModule.forRoot('')
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
