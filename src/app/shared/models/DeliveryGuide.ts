import { Company } from './Icombo';
import { DispatchNoteHeader } from './DispatchNote';
import { PurchaseDocumentItem } from './PurchaseDocumentItem';
import { Package } from './Package';
import { Supplier } from './Supplier';
export class DeliveryGuide {
    Supplier: Supplier;
    Company: Company;
    DispatchNoteHeaderList: DispatchNoteHeader[];
    SelectedPendingPOItems: PurchaseDocumentItem[];
    PackageList: Package[];
}

