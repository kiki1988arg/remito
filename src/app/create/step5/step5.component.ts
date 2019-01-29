import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GlobalFormService } from '@shared/services/global-form.service';
import { GlobalForm } from '@shared/models/IGlobalForm';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component implements OnInit {

  globalForm: GlobalForm;
  constructor(private GFS: GlobalFormService) { }
  ngOnInit() {
    this.GFS.value.subscribe(
      data => {
        this.globalForm = data;
      });
  }

}
