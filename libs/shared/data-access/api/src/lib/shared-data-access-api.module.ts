import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptorService } from './services/token-interceptor.service';
import { HttpService } from './services/http.service';
import { StoreConfig } from './models/storeConfig';

@NgModule({
  imports: [CommonModule, HttpClientModule]
})
export class SharedDataAccessApiModule {
  public static forRoot(
    baseUrl: string,
    storeConfig?: StoreConfig
  ): ModuleWithProviders {
    return {
      ngModule: SharedDataAccessApiModule,
      providers: [
        HttpService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        },
        { provide: 'config', useValue: storeConfig },
        { provide: 'baseUrl', useValue: baseUrl }
      ]
    };
  }
}
