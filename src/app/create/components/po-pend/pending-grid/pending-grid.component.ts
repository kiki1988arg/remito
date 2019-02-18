import { Component, OnInit, Injector, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { GetPurchaseDocumentItemsRequest } from '@shared/models/Requests';
import { BaseComponent } from '@create/base/base.component';
import { PurchaseDocumentItem } from '@shared/models/PurchaseDocumentItem';

@Component({
  selector: 'app-pending-grid',
  templateUrl: './pending-grid.component.html',
  styleUrls: ['./pending-grid.component.css']
})

export class PendingGridComponent extends BaseComponent implements OnInit, OnChanges {
  @Input() modified: boolean;
  public mySelection: PurchaseDocumentItem[] = [];
  public isSamePlantID = true;

  activateLoadingPanel: Boolean = true;
  gridData: any;
  gridDataArray: any[];

  // Grid PageCount Settings
  buttonCount = 5;
  info = true;
  type: 'numeric';
  pageSizes = true;
  previousNext = true;
  pageSize = 5;
  skip = 0;
  state: State = {
    skip: this.skip,
    take: this.pageSize,
  };

  constructor(
    injectorObj: Injector) {
    super(injectorObj);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getPendingGridData();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  getPendingGridData(): void {

    let filter: GetPurchaseDocumentItemsRequest;

    filter = new GetPurchaseDocumentItemsRequest();
    filter.SupplierCodeSapFrom = this.userLoggedService.supplierMr;
    filter.Language = this.userLoggedService.cultureISOTwoLetters;
    filter.Company = this.globalForm.SelectCompany.get('Company').value.ID;
    filter.Holding = this.globalForm.SelectCompany.get('Company').value.Holding;
    filter.OrderType = '3';
    filter.GetPositions = 'R';
    filter.DocumentType = 'F';

    let date = new Date();
    date.setMonth(date.getMonth() - 3);
    filter.DeliveryDateFrom = date.toISOString();

    date = new Date();
    date.setMonth(date.getMonth() + 3);
    filter.DeliveryDateTo = date.toISOString();

    // this.logisticService.GetPendingGridData(filter)
    //   .subscribe(gridData => {
    this.gridData = process(dataMock, this.state);
    this.gridDataArray = dataMock;
    this.activateLoadingPanel = false;
    // });

  }

  protected dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.gridDataArray, this.state);
  }

  pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.getPendingGridData();
  }

  public selectedCallback = (args) => args.dataItem;

  onClick() {

    if (this.mySelection.length === 0) {
      return;
    }

    const auxPlantID: string = this.mySelection[0].PlantID;
    const keepGoing: Boolean = true;
    this.isSamePlantID = true;

    this.mySelection.forEach(row => {
      if (keepGoing && auxPlantID !== row.PlantID) {
        this.isSamePlantID = false;
        // keepGoing = false;
      }
    });

    if (this.isSamePlantID) {
      this.globalForm.PreSelectedPendingPOItems = this.mySelection;
      this.NextStep();
    }
  }
}

export const dataMock = [
  {
    'DocumentNumberID': '3702748517',
    'Position': '00001',
    'Holding': 'SAPTEN',
    'CompanyID': 'DS1',
    'CompanyDesc': 'Siderca SAIC',
    'BuyerDesc': 'CARCIO Walter',
    'MaterialID': '000000000055006866',
    'MaterialDesc': 'PISTOLA PRESION AIRE MOD 69',
    'ProposedDeliveryDate': '20181126',
    'PlantID': 'S010',
    'RequestedQuantity': '15',
    'EntryQuantity': '10',
    'PreEntryQuantity': '0',
    'AvailableQuantity': 10,
    'TotalQuantityToDeliver': 0,
    'QuantityToDeliver': 0,
    'DispatchNoteNumber': 0
  },
  {
    'DocumentNumberID': '3702803033',
    'Position': '00001',
    'Holding': 'SAPTEN',
    'CompanyID': 'DS1',
    'CompanyDesc': 'Siderca SAIC',
    'BuyerDesc': 'CARCIO Walter',
    'MaterialID': '000000000055007286',
    'MaterialDesc': 'PINCEL CHATO 40MM #15',
    'ProposedDeliveryDate': '20181119',
    'PlantID': 'S010',
    'RequestedQuantity': '8',
    'EntryQuantity': '8',
    'PreEntryQuantity': '0',
    'AvailableQuantity': 10,
    'TotalQuantityToDeliver': 0,
    'QuantityToDeliver': 0,
    'DispatchNoteNumber': 0
  },
  {
    'DocumentNumberID': '3702803033',
    'Position': '00002',
    'Holding': 'SAPTEN',
    'CompanyID': 'DS1',
    'CompanyDesc': 'Siderca SAIC',
    'BuyerDesc': 'CARCIO Walter',
    'MaterialID': '000000000055023957',
    'MaterialDesc': 'RODILLO P/PINTAR 100MM DE LANA',
    'ProposedDeliveryDate': '20181119',
    'PlantID': 'S010',
    'RequestedQuantity': '10',
    'EntryQuantity': '10',
    'PreEntryQuantity': '0',
    'AvailableQuantity': 10,
    'TotalQuantityToDeliver': 0,
    'QuantityToDeliver': 0,
    'DispatchNoteNumber': 0
  },
  {
    'DocumentNumberID': '3702803033',
    'Position': '00003',
    'Holding': 'SAPTEN',
    'CompanyID': 'DS1',
    'CompanyDesc': 'Siderca SAIC',
    'BuyerDesc': 'CARCIO Walter',
    'MaterialID': '000000000055007176',
    'MaterialDesc': 'CUTTER',
    'ProposedDeliveryDate': '20181210',
    'PlantID': 'S010',
    'RequestedQuantity': '1',
    'EntryQuantity': '0',
    'PreEntryQuantity': '0',
    'AvailableQuantity': 10,
    'TotalQuantityToDeliver': 0,
    'QuantityToDeliver': 0,
    'DispatchNoteNumber': 0
  },
  {
    'DocumentNumberID': '3702803033',
    'Position': '00004',
    'Holding': 'SAPTEN',
    'CompanyID': 'DS1',
    'CompanyDesc': 'Siderca SAIC',
    'BuyerDesc': 'CARCIO Walter',
    'MaterialID': '000000000055025330',
    'MaterialDesc': 'MAZA DE 2 KG. CON CABO FIBRA DE VIDRIO',
    'ProposedDeliveryDate': '20181206',
    'PlantID': 'S010',
    'RequestedQuantity': '1',
    'EntryQuantity': '1',
    'PreEntryQuantity': '0',
    'AvailableQuantity': 10,
    'TotalQuantityToDeliver': 0,
    'QuantityToDeliver': 0,
    'DispatchNoteNumber': 0
  }
];
