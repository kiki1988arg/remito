import { BaseComponent } from '@create/base/base.component';
import { Component, OnInit, SimpleChanges, OnChanges, ViewChild } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dispatch-note-header-grid',
  templateUrl: './dispatch-note-header-grid.component.html',
  styleUrls: ['./dispatch-note-header-grid.component.scss']
})
export class DispatchNoteHeaderGridComponent extends BaseComponent implements OnInit, OnChanges {

  @ViewChild('gridForm') gridForm;
  gridData: any;

  ngOnInit() {
    super.ngOnInit();
    this.getPendingGridData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  getPendingGridData(): void {
    this.gridData = this.globalForm.PreSelectedPendingPOItems;
  }
}


