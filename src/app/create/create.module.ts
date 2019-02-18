import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { KendoModule } from '@shared/kendo.module';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperComponent } from './components/stepper/stepper.component';
import { SelectCompanyComponent } from './components/select-company/select-company.component';
import { PrintComponent } from './components/print/print.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { TransporterDataComponent } from './components/transporter-data/transporter-data.component';
import { PkgDistributionComponent } from './components/pkg-distribution/pkg-distribution.component';
import { PoPendComponent } from './components/po-pend/po-pend.component';
import { DeliveryToComponent } from './components/delivery-to/delivery-to.component';
import { Step4Component } from './step4/step4.component';
import { PendingGridComponent } from './components/po-pend/pending-grid/pending-grid.component';
import { DeclaredGridComponent } from './components/po-pend/declared-grid/declared-grid.component';
import { BaseComponent } from './base/base.component';
import { PkgDistributionDialogComponent } from './components/pkg-distribution/pkg-distribution-dialog/pkg-distribution-dialog.component';
import { DispatchNoteHeaderComponent } from './components/dispatch-note-header/dispatch-note-header.component';
// tslint:disable-next-line:max-line-length
import { DispatchNoteHeaderGridComponent } from './components/dispatch-note-header/dispatch-note-header-grid/dispatch-note-header-grid.component';

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
    DeclaredGridComponent,
    PendingGridComponent,
    BaseComponent,
    PkgDistributionDialogComponent,
    DispatchNoteHeaderComponent,
    DispatchNoteHeaderGridComponent

    ],
  imports: [
    CommonModule,
    MaterialModule,
    KendoModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [],
  entryComponents: [
    Step4Component,
    SelectCompanyComponent,
    PrintComponent,
    ConfirmComponent,
    TransporterDataComponent,
    PkgDistributionComponent,
    PoPendComponent,
    PkgDistributionDialogComponent,
    DispatchNoteHeaderComponent
  ]
})
export class CreateModule { }
