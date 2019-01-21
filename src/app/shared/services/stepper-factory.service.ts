import { Injectable, ViewContainerRef } from '@angular/core';
import { Step1Component } from 'src/app/create/step1/step1.component';
import { Step2Component } from 'src/app/create/step2/step2.component';
import { Step3Component } from 'src/app/create/step3/step3.component';
import { Step4Component } from 'src/app/create/step4/step4.component';
import { Step5Component } from 'src/app/create/step5/step5.component';
import { StepItem } from './stepItem';

@Injectable({
  providedIn: 'root'
})
export class StepperFactoryService {

  constructor() { }

  getSteps() {
    return [
      {
        title: 'Seleccione material a entregar',
        component: Step3Component
      },
      {
        title: 'Complete el formulario',
        component: Step4Component
      },
    ];
  }
  // getTemplate() {
  //   // return { template: this.viewContainerRef.createEmbeddedView(Step4Component) };
  // }

}


