import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyExist } from '@shared/validators/companyexist.validator';
import { GlobalForm } from '@shared/models/IGlobalForm';

@Injectable({
  providedIn: 'root'
})
export class GlobalFormService {


  private globalForm = new BehaviorSubject<any>(this.createForm());
  public value = this.globalForm.asObservable();

  constructor(private fb: FormBuilder) { }

  createForm(): GlobalForm {
    return {
      inputs: this.fb.group({
        Company: ['', [Validators.required, CompanyExist()]],
        DeliveryPlace: ['', [Validators.required]],
        Packages: this.fb.array([]),
        dummy: ['', [Validators.required]]
      }),
      Bultazo : []
    };
  }
}




