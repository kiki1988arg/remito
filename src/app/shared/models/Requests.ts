export class GetDispatchNotesRequest {
    SocietyID: string;
    SupplierID: string;
    Holding: string;
    State: string;
}

export class GetPurchaseDocumentItemsRequest {
    SupplierCodeSapFrom: string;
    SupplierCodeSapTo: string;
    Company: string;
    OrderType: string;
    GetPositions: string;
    Language: string;
    DeliveryDateFrom: string;
    DeliveryDateTo: string;
    DocumentType: string;
    Holding: string;
}

