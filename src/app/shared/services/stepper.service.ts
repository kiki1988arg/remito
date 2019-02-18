import { Injectable, ViewContainerRef } from '@angular/core';
import { ConfirmComponent } from '@create/components/confirm/confirm.component';
import { PrintComponent } from '@create/components/print/print.component';
import { TransporterDataComponent } from '@create/components/transporter-data/transporter-data.component';
import { PkgDistributionComponent } from '@create/components/pkg-distribution/pkg-distribution.component';
import { PoPendComponent } from '@create/components/po-pend/po-pend.component';
import { DispatchNoteHeaderComponent } from '@create/components/dispatch-note-header/dispatch-note-header.component';
import { SelectCompanyComponent } from '@create/components/select-company/select-company.component';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  constructor() { }

  getSteps(params: any) {
    switch (params) {
      default:
        return [
          {
            Selected: true,
            fgroup: '',
            Title: 'Sociedad',
            Component: SelectCompanyComponent
          },
          {
            Selected: false,
            fgroup: '',
            Title: 'Material',
            Component: PoPendComponent
          },
          {
            Selected: false,
            fgroup: '',
            Title: 'Formulario',
            Component: DispatchNoteHeaderComponent
          },
          {
            Selected: false,
            fgroup: '',
            Title: 'Distribuya',
            Component: PkgDistributionComponent
          }
          ,
          {
            Selected: false,
            fgroup: '',
            Title: 'Transportista',
            Component: TransporterDataComponent
          }
          ,
          {
            Selected: true,
            fgroup: '',
            Title: 'Confirmación',
            Component: ConfirmComponent
          }
          ,
          {
            Selected: false,
            fgroup: '',
            Title: 'Imprimir',
            Component: PrintComponent
          }
        ];
        break;
    }

  }

}
