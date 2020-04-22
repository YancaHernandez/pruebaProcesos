import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TopbarComponent } from '../shared/topbar/topbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HorizontalComponent } from './horizontal.component';

describe('HorizontalComponent', () => {
  let component: HorizontalComponent;
  let fixture: ComponentFixture<HorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HorizontalComponent,
        TopbarComponent,
        FooterComponent,
        MenuComponent
      ],
      imports: [RouterTestingModule.withRoutes([]), NgbModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
