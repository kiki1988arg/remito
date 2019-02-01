import { Component, ElementRef } from '@angular/core';
import { SpinnerService } from '@shared/services/spinner.service';
import { UserLoggedService } from '@shared/services/user-logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remito';
  showSpinner: boolean;

  constructor(private elementRef: ElementRef, private spinnerService: SpinnerService, private ul: UserLoggedService) {

    this.ul.supplierMr = this.elementRef.nativeElement.getAttribute('token');
    this.ul.culture = this.elementRef.nativeElement.getAttribute('Culture');
    this.ul.internalId = this.elementRef.nativeElement.getAttribute('internalID');

    this.spinnerService.spinnerStatus.subscribe((val: boolean) => {
      this.showSpinner = val;
    });
  }
}
