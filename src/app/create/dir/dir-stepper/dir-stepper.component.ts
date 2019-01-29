import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { StepperFactoryService } from '@shared/services/stepper-factory.service';
import { StepDirective } from '@shared/directives/step.directive';
import { GlobalFormService } from '@shared/services/global-form.service';
import { MatStepper } from '@angular/material';
import { GlobalForm } from '@shared/models/IGlobalForm';

@Component({
  selector: 'app-dir-stepper',
  templateUrl: './dir-stepper.component.html',
  styleUrls: ['./dir-stepper.component.scss']
})
export class DirStepperComponent implements OnInit {
  steps: any[];
  globalForm: GlobalForm;
  @ViewChild(StepDirective) appStep: StepDirective;

  constructor(
    private sFS: StepperFactoryService,
    private GFS: GlobalFormService
  ) { }

  ngOnInit() {
    this.GFS.value.subscribe(
      data => {
        this.globalForm = data;
      });

    this.globalForm.inputs.get('DeliveryPlace').valueChanges.subscribe(changes => {
      this.steps = this.sFS.getSteps(changes);
    });
  }
  goBack(stepper: MatStepper) {
    stepper.previous();
  }
  goForward(stepper: MatStepper) {
    stepper.next();
  }
}
