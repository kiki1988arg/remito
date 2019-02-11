import { InterceptorToken } from './interceptor-token';
import { SharedModule } from './shared/shared.module';
import { KendoModule } from './shared/kendo.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { CreateModule } from './create/create.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    KendoModule,
    SharedModule,
    CreateModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule
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
