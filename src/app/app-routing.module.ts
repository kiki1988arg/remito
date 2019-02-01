import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperComponent } from '@create/components/stepper/stepper.component';
import { PoPendComponent } from '@create/components/po-pend/po-pend.component';

const routes: Routes = [
  { path: 'LogisticsView/Create', component: StepperComponent },
  { path: 'LogisticsView/Query', component: PoPendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
