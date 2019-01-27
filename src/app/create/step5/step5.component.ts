import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GlobalFormService } from '@shared/services/global-form.service';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component implements OnInit {

  fgroup: FormGroup;
  constructor(private GFS: GlobalFormService) {
    this.GFS.value.subscribe(
      e => {
        this.fgroup = e;
      });
  }
  ngOnInit() {
  }

}
