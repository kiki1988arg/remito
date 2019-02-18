import { StepperComponent } from './../components/stepper/stepper.component';
import { ConfigTemplateItem } from '@shared/models/IConfigTemplate';
import { GlobalForm } from '@shared/models/IGlobalForm';
import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { GlobalFormService } from '@shared/services/global-form.service';
import { find as _find } from 'lodash';
import { FormBuilder } from '@angular/forms';
import { LogisticService } from '@shared/services/logistic.service';
import { Subscription, Observable, of } from 'rxjs';
import { UserLoggedService } from '@shared/services/user-logged.service';
import { HelperService } from '@shared/services/helper.service';

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnInit, OnDestroy {

  globalForm: any;
  GFS: GlobalFormService;
  fb: FormBuilder;
  logisticService: LogisticService;
  subscription: Subscription;
  userLoggedService: UserLoggedService;
  helperService: HelperService;
  company;
  dispatchNoteHeader;
  packages;

  constructor(private injectorObj: Injector) {
    this.GFS = this.injectorObj.get(GlobalFormService);
    this.fb = this.injectorObj.get(FormBuilder);
    this.logisticService = this.injectorObj.get(LogisticService);
    this.userLoggedService = this.injectorObj.get(UserLoggedService);
    this.helperService = this.injectorObj.get(HelperService);
    this.subscription = this.GFS.value.subscribe(
      data => {
        this.globalForm = data;
      });
  }
  ngOnInit() {
    this.company = this.Company();
    this.dispatchNoteHeader = this.DispatchNoteHeader();
    this.packages = this.Packages();
  }

  OnChange() {
    // Método que overridea cada component
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  PreviousStep() {
    this.GFS.ChangeStep('BACK');
  }

  NextStep() {
    this.GFS.ChangeStep('NEXT');
  }

  GetTemplateValue(key: String): String {
    const item: ConfigTemplateItem = _find(this.GFS.templates.TemplateItems, ['Field', key]);
    console.log(item);
    return (item !== undefined) ? item.Value : '';
  }
  GetTemplateValueBoolean(key: String): Boolean {
    const item: ConfigTemplateItem = _find(this.GFS.templates.TemplateItems, ['Field', key]);
    console.log(item);
    return (item !== undefined) ? true : false;
  }

  Packages() {
    return this.globalForm.Packages;
  }
  DeliveryPlace() {
    return this.globalForm.DeliveryTo.get('DeliveryPlace');
  }
  Company() {
    return this.globalForm.SelectCompany.get('Company');
  }
  DispatchNoteHeader() {
    return this.globalForm.DispatchNoteHeader;
  }
}

