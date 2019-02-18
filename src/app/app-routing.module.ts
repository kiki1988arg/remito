import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperComponent } from '@create/components/stepper/stepper.component';
import { Step4Component } from '@create/step4/step4.component';
import { PkgDistributionComponent } from '@create/components/pkg-distribution/pkg-distribution.component';
import { PoPendComponent } from '@create/components/po-pend/po-pend.component';

const routes: Routes = [
  { path: 'LogisticsView/CreateDispatchNote', component: StepperComponent },
  { path: 'LogisticsView/QueryDispatchNote', component: PkgDistributionComponent },
  { path: 'Cancel',   redirectTo: '/LogisticsView/CreateDispatchNote', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
