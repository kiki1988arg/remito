import { KendoModule } from './kendo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBarcodeModule } from 'ngx-barcode';
import { DispatchNoteBarcodeComponent } from './components/dispatch-note-barcode/dispatch-note-barcode.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [DispatchNoteBarcodeComponent],
  imports: [
    CommonModule,
    KendoModule,
    MaterialModule,
    NgxBarcodeModule
  ],
  exports: [
    NgxBarcodeModule
  ],
  entryComponents: [
    DispatchNoteBarcodeComponent
  ]
})
export class SharedModule { }
