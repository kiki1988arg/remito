import { Component, Input, OnChanges } from '@angular/core';
import { BaseComponent } from '@create/base/base.component';

@Component({
  selector: 'app-po-pend',
  templateUrl: './po-pend.component.html',
  styleUrls: ['./po-pend.component.scss']
})
// tslint:disable-next-line:max-line-length
export class PoPendComponent extends BaseComponent {

  modified: boolean;
  OnChange() {
    this.modified = (this.modified) ? false : true;
  }
}
