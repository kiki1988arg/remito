import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    DialogModule,
    PDFExportModule]
})
export class KendoModule { }