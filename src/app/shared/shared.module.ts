import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoModule } from './kendo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBarcodeModule } from 'ngx-barcode';
import { DispatchNoteBarcodeComponent } from './components/dispatch-note-barcode/dispatch-note-barcode.component';
import { MaterialModule } from './material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentPipe } from './pipes/moment.pipe';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [DispatchNoteBarcodeComponent,

    SpinnerComponent,
    MomentPipe
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
    SpinnerComponent,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MomentPipe,
    AppRoutingModule
  ],
  entryComponents: [
    DispatchNoteBarcodeComponent
  ]
})
export class SharedModule { }
