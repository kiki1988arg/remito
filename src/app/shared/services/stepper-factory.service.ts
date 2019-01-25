import { Injectable, ViewContainerRef } from '@angular/core';
import { Step4Component } from 'src/app/create/step4/step4.component';
import { Step5Component } from 'src/app/create/step5/step5.component';
import { StepItem } from './stepItem';
import { DeliveryPlaceComponent } from '@create/common/delivery-place/delivery-place.component';

@Injectable({
  providedIn: 'root'
})
export class StepperFactoryService {

  constructor() { }

  getSteps(params: any) {
    switch (params) {
      case 'dir':
        return [
          {
            Title: 'Complete el formulario',
            Component: Step4Component
          },
          {
            Title: 'Complete el formulario',
            Component: Step4Component
          }
        ];
        break;
      case 'ind':
      return [
        {
          Title: 'Complete el formulario',
          Component: Step4Component
        },
        {
          Title: 'Complete el formulario',
          Component: Step4Component
        },
        {
          Title: 'Complete el formulario',
          Component: Step4Component
        },
        {
          Title: 'Complete el formulario',
          Component: Step4Component
        }
      ];
        break;
        default:
        return [];
        break;
    }

  }
  // getTemplate() {
  //   // return { template: this.viewContainerRef.createEmbeddedView(Step4Component) };
  // }

}


