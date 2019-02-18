export class DispatchNote {
    ID: string;
    Desc: string;
    SocietyID: string;
    SocietyDesc: string;
    LogisticOperatorID: string;
    LogisticOperatorDesc: string;
    DeliveryPlaceID: string;
    DeliveryPlaceDesc: string;
    ProposedDeliveryDate: string;
    FinalDestinationID: string;
    FinalDestinationDesc: string;
    TransportGuide: string;
}

export class DispatchNoteHeader {
    DispatchNoteNumber: string;
    DeliveryPlaceID: string;
    DeliveryPlace: string;
    Observations: string;
    CommitmentDate: Date; // Fecha de entrega comprometida
}
