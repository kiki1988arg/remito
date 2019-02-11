import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperComponent } from '@create/components/stepper/stepper.component';
import { PkgDistributionComponent } from '@create/components/pkg-distribution/pkg-distribution.component';

const routes: Routes = [
  { path: 'LogisticsView/CreateDispatchNote', component: StepperComponent },
  { path: 'LogisticsView/QueryDispatchNote', component: PkgDistributionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
