import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageUnderConstructionComponent } from './components/page-under-construction/page-under-construction.component';



@NgModule({
  declarations: [PageUnderConstructionComponent],
  imports: [
    CommonModule
  ],
  exports: [PageUnderConstructionComponent]
})
export class SharedModule { }
