import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-place',
  templateUrl: './delivery-place.component.html',
  styleUrls: ['./delivery-place.component.scss']
})
export class DeliveryPlaceComponent implements OnInit {

  // Ponerle input
  @Input()fgroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  OnChange(event: any) {
    this.fgroup.get('DeliveryPlace').setValue(event.value);
  }

}
