import { Injectable, ViewContainerRef } from '@angular/core';
import { ConfirmComponent } from '@create/components/confirm/confirm.component';
import { PrintComponent } from '@create/components/print/print.component';
import { TransporterDataComponent } from '@create/components/transporter-data/transporter-data.component';
import { PkgDistributionComponent } from '@create/components/pkg-distribution/pkg-distribution.component';
import { PoPendComponent } from '@create/components/po-pend/po-pend.component';

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
            fgroup: '',
            Title: 'Material',
            Component: PoPendComponent
          },
          {
            fgroup: '',
            Title: 'Distribuya',
            Component: PkgDistributionComponent
          }
          ,
          {
            fgroup: '',
            Title: 'Transportista',
            Component: TransporterDataComponent
          }
          ,
          {
            fgroup: '',
            Title: 'Confirmación',
            Component: ConfirmComponent
          }
          ,
          {
            fgroup: '',
            Title: 'Imprimir',
            Component: PrintComponent
          }
        ];
        break;
      case 'ind':
        return [
          {
            fgroup: '',
            Title: 'Material',
            Component: PoPendComponent
          },
          {
            fgroup: '',
            Title: 'Distribuya',
            Component: PkgDistributionComponent
          }
          ,
          {
            fgroup: '',
            Title: 'Confirmación',
            Component: ConfirmComponent
          }
          ,
          {
            fgroup: '',
            Title: 'Imprimir',
            Component: PrintComponent
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


