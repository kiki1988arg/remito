import { Directive, ViewContainerRef, Input } from '@angular/core';
import { StepItem } from '../services/stepItem';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appStep]'
})
export class StepDirective {
  @Input() highlightColor: FormGroup;

  constructor(public viewContainerRef: ViewContainerRef) { }
  @Input() steps: StepItem;
}
