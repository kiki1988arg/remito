import { ConfigTemplateItem } from '@shared/models/IConfigTemplate';
import { GlobalForm } from '@shared/models/IGlobalForm';
import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { GlobalFormService } from '@shared/services/global-form.service';
import * as _ from 'lodash';
import { FormBuilder } from '@angular/forms';
import { LogisticService } from '@shared/services/logistic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnInit, OnDestroy {

  globalForm: GlobalForm;

  GFS: GlobalFormService;
  fb: FormBuilder;
  logisticService: LogisticService;
  subscription: Subscription;

  constructor(private injectorObj: Injector) {
    this.GFS = this.injectorObj.get(GlobalFormService);
    this.fb = this.injectorObj.get(FormBuilder);
    this.logisticService = this.injectorObj.get(LogisticService);
  }
  ngOnInit() {
    this.subscription = this.GFS.value.subscribe(
      data => {
        this.globalForm = data;
      });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  GetTemplateValue(key: String): String {
    const item: ConfigTemplateItem = _.find(this.GFS.templates.TemplateItems, ['Field', key]);
    console.log(item);
    return (item !== undefined) ? item.Value : '';
  }
  GetTemplateValueBoolean(key: String): Boolean {
    const item: ConfigTemplateItem = _.find(this.GFS.templates.TemplateItems, ['Field', key]);
    console.log(item);
    return (item !== undefined) ? true : false;
  }
}
