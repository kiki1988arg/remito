import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@progress/kendo-angular-dialog';
import { DispatchNoteBarcodeComponent } from 'src/app/shared/components/dispatch-note-barcode/dispatch-note-barcode.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  step1: FormGroup;
  step2: FormGroup;
  step3: FormGroup;
  step4: FormGroup;
  step5: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.step1 = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.step2 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.step3 = this._formBuilder.group({
      thirdCtrl: ['']
    });
    this.step4 = this._formBuilder.group({
      fourCtrl: ['']
    });
    this.step5 = this._formBuilder.group({
      fiveCtrl: ['']
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
}
