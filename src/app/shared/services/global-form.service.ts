import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyExist } from '@shared/validators/companyexist.validator';
import { GlobalForm } from '@shared/models/IGlobalForm';

@Injectable({
  providedIn: 'root'
})
export class GlobalFormService {

  private globalForm = new BehaviorSubject<any>(this.createForm());
  public value = this.globalForm.asObservable();
  public templates: any;

  constructor(private fb: FormBuilder) { }

  createForm(): GlobalForm {
    return {
      inputs: this.fb.group({
        Company: ['', [Validators.required, CompanyExist()]],
        DeliveryPlace: ['', [Validators.required]],
      }),
      Bultazo: [],
      Templates: []
    };
  }
}




