import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StepperFactoryService } from '@shared/services/stepper-factory.service';
import { StepDirective } from '@shared/directives/step.directive';
import { GlobalFormService } from '@shared/services/global-form.service';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-dir-stepper',
  templateUrl: './dir-stepper.component.html',
  styleUrls: ['./dir-stepper.component.scss']
})
export class DirStepperComponent implements OnInit {
  steps: any[];
  GlobalForm: FormGroup;
  @ViewChild(StepDirective) appStep: StepDirective;

  constructor(
    private sFS: StepperFactoryService,
    private GFS: GlobalFormService
  ) {
    this.GFS.value.subscribe(
      e => {
        this.GlobalForm = e;
      });
  }

  ngOnInit() {
    this.GlobalForm.get('DeliveryPlace').valueChanges.subscribe(changes => {
      this.steps = this.sFS.getSteps(changes);
      // this.loadComponent();
    });
  }
  goBack(stepper: MatStepper) {
    stepper.previous();
  }
  goForward(stepper: MatStepper) {
    stepper.next();
  }
}
