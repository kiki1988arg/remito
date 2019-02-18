import { Component, ViewChild } from '@angular/core';
import { BaseComponent } from '@create/base/base.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-dispatch-note-header',
  templateUrl: './dispatch-note-header.component.html',
  styleUrls: ['./dispatch-note-header.component.scss']
})
export class DispatchNoteHeaderComponent extends BaseComponent {
  @ViewChild('grid') grid;

  Cancel() {
    this.GFS.ChangeStep('RESET');
  }
  GoFoward() {
    if (this. dispatchNoteHeader.valid && this.grid.gridForm.valid) {
      this.globalForm.SelectedPendingPOItems.push(...this.globalForm.PreSelectedPendingPOItems);
      this.globalForm.PreSelectedPendingPOItems = [];
      this.globalForm.DispatchNoteHeaderList.push(this.dispatchNoteHeader.value);
      this.NextStep();
    }
  }
  OnBlurDispatchNoteNumber(e: any) {
    this.globalForm.PreSelectedPendingPOItems.forEach((el) => { el.DispatchNoteNumber = e.target.value; });
  }
  CreateOtherDispatchNote() {
    if (this.dispatchNoteHeader.valid && this.grid.gridForm.valid) {
      this.globalForm.SelectedPendingPOItems.push(...this.globalForm.PreSelectedPendingPOItems);
      this.globalForm.PreSelectedPendingPOItems = [];
      this.globalForm.DispatchNoteHeaderList.push(this.dispatchNoteHeader.value);
      this.dispatchNoteHeader.reset();
      this. PreviousStep();
    }
  }
}

// tslint:disable-next-line:max-line-length
// [{"DocumentNumberID":"3702748517","Position":"00001","Holding":"SAPTEN","CompanyID":"DS1","CompanyDesc":"Siderca SAIC","BuyerDesc":"CARCIO Walter","MaterialID":"000000000055006866","MaterialDesc":"PISTOLA PRESION AIRE MOD 69","ProposedDeliveryDate":"20181126","PlantID":"S010","RequestedQuantity":"15","EntryQuantity":"10","PreEntryQuantity":"0","AvailableQuantity":10,"TotalQuantityToDeliver":0,"QuantityToDeliver":0,"DispatchNoteNumber":null},{"DocumentNumberID":"3702803033","Position":"00001","Holding":"SAPTEN","CompanyID":"DS1","CompanyDesc":"Siderca SAIC","BuyerDesc":"CARCIO Walter","MaterialID":"000000000055007286","MaterialDesc":"PINCEL CHATO 40MM #15","ProposedDeliveryDate":"20181119","PlantID":"S010","RequestedQuantity":"8","EntryQuantity":"8","PreEntryQuantity":"0","AvailableQuantity":10,"TotalQuantityToDeliver":0,"QuantityToDeliver":0,"DispatchNoteNumber":null},{"DocumentNumberID":"3702803033","Position":"00002","Holding":"SAPTEN","CompanyID":"DS1","CompanyDesc":"Siderca SAIC","BuyerDesc":"CARCIO Walter","MaterialID":"000000000055023957","MaterialDesc":"RODILLO P/PINTAR 100MM DE LANA","ProposedDeliveryDate":"20181119","PlantID":"S010","RequestedQuantity":"10","EntryQuantity":"10","PreEntryQuantity":"0","AvailableQuantity":10,"TotalQuantityToDeliver":0,"QuantityToDeliver":0,"DispatchNoteNumber":null},{"DocumentNumberID":"3702803033","Position":"00003","Holding":"SAPTEN","CompanyID":"DS1","CompanyDesc":"Siderca SAIC","BuyerDesc":"CARCIO Walter","MaterialID":"000000000055007176","MaterialDesc":"CUTTER","ProposedDeliveryDate":"20181210","PlantID":"S010","RequestedQuantity":"1","EntryQuantity":"0","PreEntryQuantity":"0","AvailableQuantity":10,"TotalQuantityToDeliver":0,"QuantityToDeliver":0,"DispatchNoteNumber":null},{"DocumentNumberID":"3702803033","Position":"00004","Holding":"SAPTEN","CompanyID":"DS1","CompanyDesc":"Siderca SAIC","BuyerDesc":"CARCIO Walter","MaterialID":"000000000055025330","MaterialDesc":"MAZA DE 2 KG. CON CABO FIBRA DE VIDRIO","ProposedDeliveryDate":"20181206","PlantID":"S010","RequestedQuantity":"1","EntryQuantity":"1","PreEntryQuantity":"0","AvailableQuantity":10,"TotalQuantityToDeliver":0,"QuantityToDeliver":0,"DispatchNoteNumber":null}]
