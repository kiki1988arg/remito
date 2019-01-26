import { CompanyExist } from '@shared/validators/companyexist.validator';
import { DialogService } from '@progress/kendo-angular-dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DispatchNoteBarcodeComponent } from '@shared/components/dispatch-note-barcode/dispatch-note-barcode.component';
import { StepperFactoryService } from '@shared/services/stepper-factory.service';
import { StepDirective } from '@shared/directives/step.directive';
import { Step5Component } from '@create/step5/step5.component';
import { GlobalFormService } from '@shared/services/global-form.service';

@Component({
  selector: 'app-dir-stepper',
  templateUrl: './dir-stepper.component.html',
  styleUrls: ['./dir-stepper.component.scss']
})
export class DirStepperComponent implements OnInit {
  GlobalForm: FormGroup;
  steps: any[];
  @ViewChild(StepDirective) appStep: StepDirective;

  constructor(private fb: FormBuilder,
    private dialogService: DialogService,
    private sFS: StepperFactoryService,
    private componentFactoryResolver: ComponentFactoryResolver,

  ) { }


  ngOnInit() {

    this.GlobalForm = this.fb.group({
      Company: ['', [Validators.required, CompanyExist()]],
      DeliveryPlace: ['', [Validators.required]]
    });
    this.GlobalForm.get('DeliveryPlace').valueChanges.subscribe(changes => {
      this.steps = this.sFS.getSteps(changes);
      // this.loadComponent();
    });
  }

  finish() {
    const dialogRef = this.dialogService.open({
      width: 900,
      height: 575,
      // Show component
      content: DispatchNoteBarcodeComponent,
    });
  }

  loadComponent() {

    this.steps.forEach(element => {
      const componentFactory =
         this.componentFactoryResolver.resolveComponentFactory(element.Component);

      const viewContainerRef = this.appStep.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<any>componentRef.instance).fgroup = this.GlobalForm ;

    });
  }
}
