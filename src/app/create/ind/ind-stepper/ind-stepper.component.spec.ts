import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndStepperComponent } from './ind-stepper.component';

describe('IndStepperComponent', () => {
  let component: IndStepperComponent;
  let fixture: ComponentFixture<IndStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
