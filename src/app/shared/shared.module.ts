import { KendoModule } from './kendo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBarcodeModule } from 'ngx-barcode';
import { DispatchNoteBarcodeComponent } from './components/dispatch-note-barcode/dispatch-note-barcode.component';
import { MaterialModule } from './material.module';
import { StepDirective } from './directives/step.directive';

@NgModule({
  declarations: [DispatchNoteBarcodeComponent,
    StepDirective,
    ],
  imports: [
    CommonModule,
    KendoModule,
    MaterialModule,
    NgxBarcodeModule
  ],
  exports: [
    NgxBarcodeModule,
    StepDirective
  ],
  entryComponents: [
    DispatchNoteBarcodeComponent,
  ]
})
export class SharedModule { }
