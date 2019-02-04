import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '@create/base/base.component';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { remove as _remove } from 'lodash';
import * as _ from 'lodash';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-pkg-distribution',
  templateUrl: './pkg-distribution.component.html',
  styleUrls: ['./pkg-distribution.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PkgDistributionComponent extends BaseComponent implements OnInit {

  materialToDelivery = Mock;

  ngOnInit() {
    super.ngOnInit();
    this.addPackage();
  }
  addPackage() {
    this.globalForm.Packages.push([]);
  }
  MoveItem(item, j) {
    this.globalForm.Packages[j].push(item);
    _.pull(this.materialToDelivery, item);
  }
  MoveArrayItems(j) {
    const SelectedItems = _.filter(this.materialToDelivery, ['Selected', true]);
    this.globalForm.Packages[j].push(...SelectedItems);
    _.pullAll(this.materialToDelivery, SelectedItems);
  }

  toggleSelection(item) {
    item.Selected ? item.Selected = false : item.Selected = true;
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}


export const Mock =
  [
    { Number: 64082197184, Position: 1, Description: 'Description random', Count: 123, Color: '#1b335f', Selected: true },
    { Number: 64082197184, Position: 2, Description: 'Description random', Count: 123, Color: '#1b335f', Selected: false },
    { Number: 64082197184, Position: 3, Description: 'Description random', Count: 123, Color: '#1b335f', Selected: false },
    { Number: 64082197184, Position: 4, Description: 'Description random', Count: 123, Color: '#1b335f', Selected: false },
    { Number: 64082197184, Position: 5, Description: 'Description random', Count: 123, Color: '#1b335f', Selected: false },
    { Number: 64082197184, Position: 6, Description: 'Description random', Count: 123, Color: '#1b335f', Selected: false },
    { Number: 80594918790, Position: 10, Description: 'Description random', Count: 123, Color: '#cca2e1', Selected: false },
    { Number: 80594918790, Position: 11, Description: 'Description random', Count: 123, Color: '#cca2e1', Selected: false },
    { Number: 80594918790, Position: 12, Description: 'Description random', Count: 123, Color: '#cca2e1', Selected: false },
    { Number: 80594918790, Position: 13, Description: 'Description random', Count: 123, Color: '#cca2e1', Selected: false },
    { Number: 80594918790, Position: 14, Description: 'Description random', Count: 123, Color: '#cca2e1', Selected: false },
    { Number: 98883055821, Position: 20, Description: 'Description random', Count: 123, Color: '#87e5da', Selected: false },
    { Number: 98883055821, Position: 21, Description: 'Description random', Count: 123, Color: '#87e5da', Selected: false },
    { Number: 93354483003, Position: 30, Description: 'Description random', Count: 123, Color: '#298f9b', Selected: false },
    { Number: 32826906663, Position: 40, Description: 'Description random', Count: 123, Color: '#f67e7d', Selected: false },
    { Number: 33100616267, Position: 50, Description: 'Description random', Count: 123, Color: '#add2c9', Selected: false },
    { Number: 33100616267, Position: 51, Description: 'Description random', Count: 123, Color: '#393e46', Selected: false },
    { Number: 33100616267, Position: 52, Description: 'Description random', Count: 123, Color: '#393e46', Selected: false },
    { Number: 33100616267, Position: 53, Description: 'Description random', Count: 123, Color: '#393e46', Selected: false },
    { Number: 33100616267, Position: 54, Description: 'Description random', Count: 123, Color: '#393e46', Selected: false },
    { Number: 33100616267, Position: 55, Description: 'Description random', Count: 123, Color: '#393e46', Selected: false },
    { Number: 33100616267, Position: 56, Description: 'Description random', Count: 123, Color: '#393e46', Selected: false },
    { Number: 33100616267, Position: 60, Description: 'Description random', Count: 123, Color: '#393e46', Selected: false },
    { Number: 71643998918, Position: 300, Description: 'Description random', Count: 123, Color: '#20716a', Selected: false },
    { Number: 71643998918, Position: 310, Description: 'Description random', Count: 123, Color: '#20716a', Selected: false },
    { Number: 71643998918, Position: 320, Description: 'Description random', Count: 123, Color: '#20716a', Selected: false },
    { Number: 71643998918, Position: 330, Description: 'Description random', Count: 123, Color: '#20716a', Selected: false },
    { Number: 71643998918, Position: 340, Description: 'Description random', Count: 123, Color: '#20716a', Selected: false },
    { Number: 71643998918, Position: 350, Description: 'Description random', Count: 123, Color: '#20716a', Selected: false },
    { Number: 71643998918, Position: 360, Description: 'Description random', Count: 123, Color: '#20716a', Selected: false }
  ];

