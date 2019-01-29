import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalFormService } from '@shared/services/global-form.service';
import { GlobalForm } from '@shared/models/IGlobalForm';

@Component({
  selector: 'app-delivery-place',
  templateUrl: './delivery-place.component.html',
  styleUrls: ['./delivery-place.component.scss']
})
export class DeliveryPlaceComponent implements OnInit {

  globalForm: GlobalForm;


  constructor(private GFS: GlobalFormService) { }

  ngOnInit() {
    this.GFS.value.subscribe(
      data => {
        this.globalForm = data;
      });
  }

  OnChange(event: any) {
    this.globalForm.inputs.get('DeliveryPlace').setValue(event.value);
  }

}
