import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  jej: String = 'lala';
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
