import { StepDirective } from '@shared/directives/step.directive';
import { SharedModule } from '@shared/shared.module';
import { KendoModule } from '@shared/kendo.module';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { ChooseCompanyComponent } from './common/choose-company/choose-company.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { IndStepperComponent } from './ind/ind-stepper/ind-stepper.component';
import { DirStepperComponent } from './dir/dir-stepper/dir-stepper.component';
import { DeliveryPlaceComponent } from './common/delivery-place/delivery-place.component';
import { Step2Component } from './step2/step2.component';

@NgModule({
  declarations: [
    Step2Component,
    Step4Component,
    Step5Component,
    ChooseCompanyComponent,
    IndStepperComponent,
    DirStepperComponent,
    DeliveryPlaceComponent,
    StepDirective
    ],
  imports: [
    CommonModule,
    MaterialModule,
    KendoModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [],
  entryComponents: [
    Step4Component,
    DeliveryPlaceComponent
  ]
})
export class CreateModule { }
