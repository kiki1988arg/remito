import { Directive, ViewContainerRef, Input } from '@angular/core';
import { StepItem } from '../services/stepItem';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appStep]'
})
export class StepDirective {
  @Input() fgroup: FormGroup;
  @Input() step: StepItem;
  constructor(public viewContainerRef: ViewContainerRef) { }

}
