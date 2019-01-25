import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public spinnerStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  displayLoader(value: boolean) {
      this.spinnerStatus.next(value);
  }

  constructor() { }
}

