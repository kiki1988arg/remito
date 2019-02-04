import { BaseComponent } from '../../base/base.component';
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { StepperFactoryService } from '@shared/services/stepper-factory.service';
import { MatStepper } from '@angular/material';

import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StepperComponent extends BaseComponent implements OnInit {
  steps: any[];
  totalStepsCount: number;
  @ViewChild('stepper') stepperChild;

  constructor(
    injectorObj: Injector,
    private sFS: StepperFactoryService) {
    super(injectorObj);
  }

  ngOnInit() {
    super.ngOnInit();
    this.globalForm.inputs.get('DeliveryPlace').valueChanges.subscribe(changes => {
      this.steps = this.sFS.getSteps(changes);
    });
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }
  goForward(stepper: MatStepper) {
    stepper.next();
    if (stepper.selectedIndex > 2 ) {
      this.totalStepsCount = this.stepperChild.steps.length - 1;
    }
  }
}
