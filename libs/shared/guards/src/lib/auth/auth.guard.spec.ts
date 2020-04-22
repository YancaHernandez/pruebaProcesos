import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { environment } from 'apps/admin/web/src/environments/environment';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedDataAccessApiModule.forRoot(environment.url_endpoint)
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
