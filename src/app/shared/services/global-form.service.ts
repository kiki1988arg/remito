import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyExist } from '@shared/validators/companyexist.validator';

@Injectable({
  providedIn: 'root'
})
export class GlobalFormService {


  private globalForm = new BehaviorSubject<FormGroup>(this.createForm());
  public value = this.globalForm.asObservable();

  constructor(private fb: FormBuilder) { }

  createForm(): FormGroup {
    return this.fb.group({
      Company: ['', [Validators.required, CompanyExist()]],
      DeliveryPlace: ['', [Validators.required]],
      Remito: this.fb.array([]),
      dummy: ['', [Validators.required]]
    });
  }
}




