import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@create/base/base.component';

@Component({
  selector: 'app-delivery-to',
  templateUrl: './delivery-to.component.html',
  styleUrls: ['./delivery-to.component.scss']
})
export class DeliveryToComponent extends BaseComponent implements OnInit {

  OnChange(event: any) {
    this.globalForm.inputs.get('DeliveryPlace').setValue(event.value);
  }
}
