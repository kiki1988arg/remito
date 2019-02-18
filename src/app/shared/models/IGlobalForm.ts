import { FormGroup } from '@angular/forms';
import { PurchaseDocumentItem } from './PurchaseDocumentItem';

export interface GlobalForm {
  SelectCompany: FormGroup;
  DeliveryTo: FormGroup;
  Packages: any;
  Templates: any;
  SelectedPendingPOItems: PurchaseDocumentItem[];
}

export interface Bulto {
  Bultitos: any[];
}

