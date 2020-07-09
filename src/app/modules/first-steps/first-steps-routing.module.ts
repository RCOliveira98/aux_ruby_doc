import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupComponent } from './setup/setup.component';
import { InstallationComponent } from './setup/installation/installation.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DataTypesComponent } from './data-types/data-types.component';

const routes: Routes = [
  {path: '', component: SetupComponent, children: [
    {path: '', component: InstallationComponent},
    {path: 'installation', component: InstallationComponent},
    {path: 'input_output', component: InputOutputComponent},
    {path: 'data_types', component: DataTypesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstStepsRoutingModule { }
