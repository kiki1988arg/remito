import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import { BaseComponent } from '@create/base/base.component';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { remove as _remove } from 'lodash';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material';
import { PkgDistributionDialogComponent } from './pkg-distribution-dialog/pkg-distribution-dialog.component';

@Component({
  selector: 'app-pkg-distribution',
  templateUrl: './pkg-distribution.component.html',
  styleUrls: ['./pkg-distribution.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PkgDistributionComponent extends BaseComponent implements OnInit {

  materialToDelivery = Mock;
  TransferType: string;

  constructor(injectorObj: Injector,
    private dialog: MatDialog) {
    super(injectorObj);
  }

  ngOnInit() {
    super.ngOnInit();
    this.TransferType = 'specific';
    this.addPackage();
  }
  // Agregar paquetes
  addPackage() {
    this.packages.push([]);
  }
  AutoCompletePackageCount() {
    _.forEach(this.materialToDelivery, function (item) {
      item.PackageCount = item.AvailableQuantity;
    });
  }

  MoveItem(item, j) {
    this.packages[j].push(item);
    _.pull(this.materialToDelivery, item);
  }
  MoveArrayItems(j) {
    const SelectedItems = _.filter(this.materialToDelivery, ['Selected', true]);
    this.packages[j].push(...SelectedItems);
    _.pullAll(this.materialToDelivery, SelectedItems);
  }

  toggleSelection(item) {
    item.Selected ? item.Selected = false : item.Selected = true;
  }

  removeItem(i, j, item) {
    this.packages[i].splice(j, 1);
    const ItemToModify = _.find(this.materialToDelivery, { 'DocumentNumberID': item.DocumentNumberID, 'Position': item.Position });
    ItemToModify.InPackageCount -= item.InPackageCount;
  }

  // Evento del Drag and drop que se ejecuta al mover un valor de una grilla al otro.
  drop(event: CdkDragDrop<any[]>) {
    const previousContainer = event.previousContainer;
    const targetContainer = event.container;
    const previousItem = event.previousContainer.data[event.previousIndex];

    if (previousContainer === targetContainer) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (previousContainer.id === 'cdk-drop-list-0') {
      switch (this.TransferType) {
        case 'specific':
          {
            const dialogRef = this.dialog.open(PkgDistributionDialogComponent, {
              width: '250px',
              data: { count: previousItem['PackageCount'] - previousItem['InPackageCount'] }
            });

            // Al cerrar el dialogo se modifican las diferentes grillas.
            dialogRef.afterClosed().subscribe(result => {
              if (result) {
                const item = _.clone(previousItem);
                item.InPackageCount = 0;
                item.InPackageCount += result;
                targetContainer.data.push(item);
                previousItem.InPackageCount += result;
              }
            });
          }

          break;
        case 'unit':
          {
            const item = _.clone(previousItem);
            item.InPackageCount = 0;
            item.InPackageCount += 1;
            targetContainer.data.push(item);
            previousItem.InPackageCount += 1;
          }
          break;
        case 'total':
          {
            const item = _.clone(previousItem);
            item.InPackageCount = previousItem.PackageCount - item.InPackageCount;
            previousItem.InPackageCount += item.InPackageCount;
            targetContainer.data.push(item);
          }
          break;
      }
      // Abre el dialogo para saber la cantidad a enviar.

    } else if (targetContainer.id === 'cdk-drop-list-0') {
      const x = document.querySelectorAll('.dropeable');
      console.log(x);

    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}


export const Mock =
  [{
    DocumentNumberID: '6601287176',
    Position: 1,
    Holding: 'SAPTEN',
    CompanyID: 'DS1',
    CompanyDesc: 'Siderca SAIC',
    BuyerDesc: 'BERTOLI Luciano',
    MaterialID: '000000000049038453',
    MaterialDesc: 'TACO DE GOMA AMORTIGUADOR YUMA 721/TT',
    ProposedDeliveryDate: '20181129',
    PlantID: 'S010',
    RequestedQuantity: 3,
    EntryQuantity: 3,
    PreEntryQuantity: 0,
    AvailableQuantity: 1,
    Color: '#000',
    PackageCount: 0,
    InPackageCount: 0
  }, {
    DocumentNumberID: '6601287176',
    Position: 2,
    Holding: 'SAPTEN',
    CompanyID: 'DS1',
    CompanyDesc: 'Siderca SAIC',
    BuyerDesc: 'BERTOLI Luciano',
    MaterialID: '000000000049038453',
    MaterialDesc: 'TACO DE GOMA AMORTIGUADOR YUMA 721/TT',
    ProposedDeliveryDate: '20181129',
    PlantID: 'S010',
    RequestedQuantity: 36,
    EntryQuantity: 14,
    PreEntryQuantity: 2,
    AvailableQuantity: 21,
    Color: '#003636',
    PackageCount: 0,
    InPackageCount: 0
  }, {
    DocumentNumberID: '6601287176',
    Position: 3,
    Holding: 'SAPTEN',
    CompanyID: 'DS1',
    CompanyDesc: 'Siderca SAIC',
    BuyerDesc: 'BERTOLI Luciano',
    MaterialID: '000000000049038453',
    MaterialDesc: 'TACO DE GOMA AMORTIGUADOR YUMA 721/TT',
    ProposedDeliveryDate: '20181129',
    PlantID: 'S010',
    RequestedQuantity: 6,
    EntryQuantity: 6,
    PreEntryQuantity: 0,
    AvailableQuantity: 1,
    Color: '#E10',
    PackageCount: 0,
    InPackageCount: 0
  },
  {
    DocumentNumberID: '6601287176',
    Position: 4,
    Holding: 'SAPTEN',
    CompanyID: 'DS1',
    CompanyDesc: 'Siderca SAIC',
    BuyerDesc: 'BERTOLI Luciano',
    MaterialID: '000000000049038453',
    MaterialDesc: 'TACO DE GOMA AMORTIGUADOR YUMA 721/TT',
    ProposedDeliveryDate: '20181129',
    PlantID: 'S010',
    RequestedQuantity: 3,
    EntryQuantity: 3,
    PreEntryQuantity: 0,
    AvailableQuantity: 1,
    Color: '#003636',
    PackageCount: 0,
    InPackageCount: 0
  }, {
    DocumentNumberID: '6601287176',
    Position: 5,
    Holding: 'SAPTEN',
    CompanyID: 'DS1',
    CompanyDesc: 'Siderca SAIC',
    BuyerDesc: 'BERTOLI Luciano',
    MaterialID: '000000000049038453',
    MaterialDesc: 'TACO DE GOMA AMORTIGUADOR YUMA 721/TT',
    ProposedDeliveryDate: '20181129',
    PlantID: 'S010',
    RequestedQuantity: 36,
    EntryQuantity: 14,
    PreEntryQuantity: 2,
    AvailableQuantity: 21,
    Color: '#600060',
    PackageCount: 0,
    InPackageCount: 0
  }, {
    DocumentNumberID: '6601287176',
    Position: 6,
    Holding: 'SAPTEN',
    CompanyID: 'DS1',
    CompanyDesc: 'Siderca SAIC',
    BuyerDesc: 'BERTOLI Luciano',
    MaterialID: '000000000049038453',
    MaterialDesc: 'TACO DE GOMA AMORTIGUADOR YUMA 721/TT',
    ProposedDeliveryDate: '20181129',
    PlantID: 'S010',
    RequestedQuantity: 6,
    EntryQuantity: 6,
    PreEntryQuantity: 0,
    AvailableQuantity: 1,
    Color: '#600000',
    PackageCount: 0,
    InPackageCount: 0
  }
  ];

