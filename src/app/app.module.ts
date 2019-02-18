import { InterceptorToken } from './interceptor-token';
import { SharedModule } from './shared/shared.module';
import { KendoModule } from './shared/kendo.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { CreateModule } from './create/create.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule,
    KendoModule,
    SharedModule,
    CreateModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorToken,
      multi: true,
    }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
