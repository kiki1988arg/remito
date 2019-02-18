import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalForm } from '@shared/models/IGlobalForm';
import { Company } from '@shared/models/Icombo';
import { PurchaseDocumentItem } from '@shared/models/PurchaseDocumentItem';
import { Subject, of } from 'rxjs';
import { DeliveryGuide } from '@shared/models/DeliveryGuide';
import { DispatchNoteHeader } from '@shared/models/DispatchNote';

@Injectable({
  providedIn: 'root'
})
export class GlobalFormService {

  private globalForm = new BehaviorSubject<any>(this.createForm());

  private changeStep = new Subject<string>();
  public changeStep$ = this.changeStep.asObservable();

  public value = this.globalForm.asObservable();
  public templates: any;
  combo: Company;
  purchaseDocumentItem: PurchaseDocumentItem;
  deliveryGuide: DeliveryGuide;
  dispatchNoteHeader: DispatchNoteHeader;

  constructor(private fb: FormBuilder) { }

  createForm(): any {
    return {
      SelectCompany: this.fb.group({
        Company: [this.combo, [Validators.required]]
      }),
      DeliveryTo: this.fb.group({
        DeliveryPlace: ['', [Validators.required]]
      }),
      DispatchNoteHeader: this.fb.group({
        DispatchNoteNumber: ['', [Validators.required]],
        DeliveryPlaceDesc: ['', [Validators.required]],
        Observations: ['', [Validators.required]],
        ProbablyDate: ['', [Validators.required]],
        DeliveryPlaceID: ['', [Validators.required]]
      }),
      Packages: [],
      Templates: [],
      DispatchNoteHeaderList: [],
      PreSelectedPendingPOItems: [],
      SelectedPendingPOItems: []
    };
  }

  ChangeStep(change: string) {
    this.changeStep.next(change);
  }

  Clear() {
    this.globalForm = new BehaviorSubject<any>(this.createForm());
    this.value = this.globalForm.asObservable();
  }

}
