import { BaseComponent } from '../../base/base.component';
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { StepperService } from '@shared/services/stepper.service';

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
    private stepperService: StepperService) {
    super(injectorObj);
    this.GFS.changeStep$.subscribe(direction => {

      switch (direction) {
        case 'NEXT': this.Next();
          break;
        case 'BACK': this.Back();
          break;
        case 'RESET': this.Restart();
          break;
      }

    });
  }

  ngOnInit() {
    super.ngOnInit();


    this.steps = this.stepperService.getSteps('');

  }

  Next() {
    this.stepperChild.next();
    this.steps[this.stepperChild.selectedIndex].Selected = true;
  }
  Back() {
    this.stepperChild.previous();
  }

  Restart() {
    this.stepperChild.reset();
    this.GFS.Clear();
  }

  OnChangeStep(e) {
    console.log(e);
    e.selectedStep.ngOnChanges();
    this.steps[e.selectedIndex].Component.prototype.OnChange();
  }
}
