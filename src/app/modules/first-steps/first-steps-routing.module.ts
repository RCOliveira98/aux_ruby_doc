import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageUnderConstructionComponent } from './../shared/components/page-under-construction/page-under-construction.component';

import { SetupComponent } from './components/setup/setup.component';
import { InstallationComponent } from './components/setup/installation/installation.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { DataTypesComponent } from './components/data-types/data-types.component';
import { OperatorsComponent } from './components/operators/operators.component';

const routes: Routes = [
  {path: '', component: SetupComponent, children: [
    {path: '', component: InstallationComponent},
    {path: 'installation', component: InstallationComponent},
    {path: 'input_output', component: InputOutputComponent},
    {path: 'data_types', component: DataTypesComponent},
    {path: 'operators', component: OperatorsComponent},
    {path: 'decision_structure', component: PageUnderConstructionComponent},
    {path: 'repetition_structure', component: PageUnderConstructionComponent},
    {path: 'hash', component: PageUnderConstructionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstStepsRoutingModule { }
