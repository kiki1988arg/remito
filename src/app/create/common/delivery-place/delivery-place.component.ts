import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalFormService } from '@shared/services/global-form.service';

@Component({
  selector: 'app-delivery-place',
  templateUrl: './delivery-place.component.html',
  styleUrls: ['./delivery-place.component.scss']
})
export class DeliveryPlaceComponent implements OnInit {

  fgroup: FormGroup;

  constructor(private GFS: GlobalFormService) {
    this.GFS.value.subscribe(
      e => {
        this.fgroup = e;
      });
  }

  ngOnInit() {
  }

  OnChange(event: any) {
    this.fgroup.get('DeliveryPlace').setValue(event.value);
  }

}
