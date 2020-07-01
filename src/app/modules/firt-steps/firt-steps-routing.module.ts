import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  {path: '', component: SetupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirtStepsRoutingModule { }
