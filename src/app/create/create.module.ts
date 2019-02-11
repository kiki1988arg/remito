import { SharedModule } from '@shared/shared.module';
import { KendoModule } from '@shared/kendo.module';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { StepperComponent } from './components/stepper/stepper.component';
import { SelectCompanyComponent } from './components/select-company/select-company.component';
import { PrintComponent } from './components/print/print.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { TransporterDataComponent } from './components/transporter-data/transporter-data.component';
import { PkgDistributionComponent } from './components/pkg-distribution/pkg-distribution.component';
import { PoPendComponent } from './components/po-pend/po-pend.component';
import { DeliveryToComponent } from './components/delivery-to/delivery-to.component';
import { Step4Component } from './step4/step4.component';
import { MainGrid2Component } from './components/po-pend/main-grid2/main-grid2.component';
import { MainGridComponent } from './components/po-pend/main-grid/main-grid.component';
import { BaseComponent } from './base/base.component';
import { PkgDistributionHeaderComponent } from './components/pkg-distribution/pkg-distribution-header/pkg-distribution-header.component';
import { PkgDistributionDialogComponent } from './components/pkg-distribution/pkg-distribution-dialog/pkg-distribution-dialog.component';

@NgModule({
  declarations: [
    Step4Component,
    StepperComponent,
    SelectCompanyComponent,
    DeliveryToComponent,
    PrintComponent,
    ConfirmComponent,
    TransporterDataComponent,
    PkgDistributionComponent,
    PoPendComponent,
    MainGrid2Component,
    MainGridComponent,
    BaseComponent,
    PkgDistributionHeaderComponent,
    PkgDistributionDialogComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    KendoModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [],
  entryComponents: [
    Step4Component,
    PrintComponent,
    ConfirmComponent,
    TransporterDataComponent,
    PkgDistributionComponent,
    PoPendComponent,
    PkgDistributionDialogComponent
  ]
})
export class CreateModule { }
