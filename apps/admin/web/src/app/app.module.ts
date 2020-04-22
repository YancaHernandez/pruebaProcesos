import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedDataAccessApiModule } from '@akaliia/shared/data-access/api';
import { AdminFeatureShellModule } from '@akaliia/admin/feature/shell';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AdminFeatureShellModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedDataAccessApiModule.forRoot(environment.url_endpoint)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
