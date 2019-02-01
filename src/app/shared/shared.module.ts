import { KendoModule } from './kendo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBarcodeModule } from 'ngx-barcode';
import { DispatchNoteBarcodeComponent } from './components/dispatch-note-barcode/dispatch-note-barcode.component';
import { MaterialModule } from './material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [DispatchNoteBarcodeComponent,

    SpinnerComponent
    ],
  imports: [
    CommonModule,
    KendoModule,
    MaterialModule,
    NgxBarcodeModule
  ],
  exports: [
    NgxBarcodeModule,

    DispatchNoteBarcodeComponent,
    SpinnerComponent
  ],
  entryComponents: [
    DispatchNoteBarcodeComponent
  ]
})
export class SharedModule { }
