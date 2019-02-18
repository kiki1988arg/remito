import { PurchaseDocumentItem } from './../../../shared/models/PurchaseDocumentItem';
import { Component, OnInit, ViewEncapsulation, Injector } from '@angular/core';
import { BaseComponent } from '@create/base/base.component';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { remove as _remove } from 'lodash';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material';
import { PkgDistributionDialogComponent } from './pkg-distribution-dialog/pkg-distribution-dialog.component';
import { Package } from '@shared/models/Package';

@Component({
  selector: 'app-pkg-distribution',
  templateUrl: './pkg-distribution.component.html',
  styleUrls: ['./pkg-distribution.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PkgDistributionComponent extends BaseComponent implements OnInit {

  error;
  TransferType: string;
  selectedPOItems: Package[];

  constructor(injectorObj: Injector,
    private dialog: MatDialog) {
    super(injectorObj);
  }

  ngOnInit() {
    super.ngOnInit();
    this.TransferType = 'specific';
    this.addPackage();
    this.error = document.querySelectorAll('.error');
  }
  // Agregar paquetes
  addPackage() {
    this.packages.push(new Package(this.packages.length + 1));
  }
  // AutoCompleteTotalQuantityToDeliver() {
  //   _.forEach(this.selectedPendingPOItems, function (item) {
  //     item.TotalQuantityToDeliver = item.AvailableQuantity;
  //   });
  // }

  // Cuando se habilite transferencia por botón
  // MoveItem(item, j) {
  //   this.packages[j].push(item);
  //   _.pull(this.materialToDelivery, item);
  // }
  // MoveArrayItems(j) {
  //   const SelectedItems = _.filter(this.materialToDelivery, ['Selected', true]);
  //   const clonedItems = _.clone(SelectedItems);
  //   this.packages[j].push(...clonedItems);
  // }

  // toggleSelection(item) {
  //   item.Selected ? item.Selected = false : item.Selected = true;
  // }

  removeItem(i, j, item) {
    this.packages[i].POitems.splice(j, 1);
    const ItemToModify: any = _.find(this.globalForm.SelectedPendingPOItems
      , { 'DocumentNumberID': item.DocumentNumberID, 'Position': item.Position });
    ItemToModify.QuantityToDeliver -= item.QuantityToDeliver;
  }

  // Evento del Drag and drop que se ejecuta al mover un valor de una grilla al otro.
  drop(event: CdkDragDrop<any[]>) {
    const previousContainer = event.previousContainer;
    const targetContainer = event.container;
    const previousItem = event.previousContainer.data[event.previousIndex];

    if (previousContainer === targetContainer) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (previousContainer.id === 'LeftDropZone') {
      switch (this.TransferType) {
        case 'specific':
          {
            const dialogRef = this.dialog.open(PkgDistributionDialogComponent, {
              width: '250px',
              data: { MaxCount: previousItem['TotalQuantityToDeliver'] - previousItem['QuantityToDeliver'] }
            });

            // Al cerrar el dialogo se modifican las diferentes grillas.
            dialogRef.afterClosed().subscribe(result => {
              if (result) {
                const item = _.clone(previousItem);
                item.QuantityToDeliver = 0;
                item.QuantityToDeliver += result;
                targetContainer.data.push(item);
                previousItem.QuantityToDeliver += result;
              }
            });
          }

          break;
        case 'unit':
          {
            const item = _.clone(previousItem);
            item.QuantityToDeliver = 0;
            item.QuantityToDeliver += 1;
            targetContainer.data.push(item);
            previousItem.QuantityToDeliver += 1;
          }
          break;
        case 'total':
          {
            const item = _.clone(previousItem);
            item.QuantityToDeliver = previousItem.TotalQuantityToDeliver - item.QuantityToDeliver;
            previousItem.QuantityToDeliver += item.QuantityToDeliver;
            targetContainer.data.push(item);
          }
          break;
      }
      // Abre el dialogo para saber la cantidad a enviar.

    } else if (targetContainer.id === 'LeftDropZone') {

    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  submit() {
    // this.GFS.SubmitForm(this.globalForm);
  }
}

