import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupComponent } from './setup/setup.component';
import { InstallationComponent } from './setup/installation/installation.component';

const routes: Routes = [
  {path: '', component: SetupComponent, children: [
    {path: '', component: InstallationComponent},
    {path: 'installation', component: InstallationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstStepsRoutingModule { }
