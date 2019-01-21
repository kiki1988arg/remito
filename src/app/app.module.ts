import { SharedModule } from './shared/shared.module';
import { KendoModule } from './shared/kendo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './create/stepper/stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Step1Component } from './create/step1/step1.component';
import { Step2Component } from './create/step2/step2.component';
import { Step3Component } from './create/step3/step3.component';
import { Step4Component } from './create/step4/step4.component';
import { Step5Component } from './create/step5/step5.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';


@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    KendoModule,
    SharedModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DialogsModule,
    PDFExportModule
  ],
  providers: [],
  entryComponents: [
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
