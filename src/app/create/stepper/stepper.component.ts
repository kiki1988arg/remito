import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@progress/kendo-angular-dialog';
import { DispatchNoteBarcodeComponent } from 'src/app/shared/components/dispatch-note-barcode/dispatch-note-barcode.component';
import { StepperFactoryService } from 'src/app/shared/services/stepper-factory.service';
import { StepDirective } from 'src/app/shared/directives/step.directive';
import { StepItem } from 'src/app/shared/services/stepItem';
import { Step3Component } from '../step3/step3.component';
import { Step4Component } from '../step4/step4.component';
import { Step5Component } from '../step5/step5.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  // @ViewChild('steps') private steps: TemplateRef<any>;
  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  steps: any[];
  @ViewChild(StepDirective) adStep: StepDirective;

  constructor(private _formBuilder: FormBuilder,
    private dialogService: DialogService,
    private sFS: StepperFactoryService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.steps = this.sFS.getSteps();
    // this.steps = this.sFS.getTemplate();
    this.step1 = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.step2 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.step3 = this._formBuilder.group({
      thirdCtrl: ['12341234']
    });
    // this.loadComponent();
  }


  loadComponent() {
    const adItem = this.steps[1];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adStep.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(componentFactory);

  }
  finish() {
    const dialogRef = this.dialogService.open({
      width: 900,
      height: 575,
      // Show component
      content: DispatchNoteBarcodeComponent,
    });
  }
}
