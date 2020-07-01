import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirtStepsRoutingModule } from './firt-steps-routing.module';
import { SetupComponent } from './setup/setup.component';


@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    FirtStepsRoutingModule
  ]
})
export class FirtStepsModule { }
