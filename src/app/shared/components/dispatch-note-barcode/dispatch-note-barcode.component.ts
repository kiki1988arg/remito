import { Component, OnInit } from '@angular/core';
import { DialogContentBase, DialogRef } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-dispatch-note-barcode',
  templateUrl: './dispatch-note-barcode.component.html',
  styleUrls: ['./dispatch-note-barcode.component.scss']
})
export class DispatchNoteBarcodeComponent extends DialogContentBase implements OnInit {

  constructor(dialog: DialogRef) {
    super(dialog);
  }
  ngOnInit() {
  }

}
