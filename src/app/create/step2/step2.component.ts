import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  @Input() group: FormGroup;

  constructor() { }

  ngOnInit() {
  }
  debug() {
    console.log(this.group);
  }

  OnChange(event: any) {
    this.group.controls['secondCtrl'].setValue(event.value);

    // this.group.controls.secondControl.setValue(value);
  }
}
