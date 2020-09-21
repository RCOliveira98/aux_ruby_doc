import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageUnderConstructionComponent } from './../shared/components/page-under-construction/page-under-construction.component';

const routes: Routes = [
  {path: 'introduction', component: PageUnderConstructionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrayRoutingModule { }
