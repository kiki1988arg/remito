import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    DialogModule,
    PDFExportModule,
    GridModule,
    InputsModule
  ]
})
export class KendoModule { }
