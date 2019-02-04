import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperComponent } from '@create/components/stepper/stepper.component';
import { Step4Component } from '@create/step4/step4.component';

const routes: Routes = [
  { path: 'LogisticsView/Create', component: StepperComponent },
  { path: 'LogisticsView/Query', component: Step4Component },
  { path: '', component: Step4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
