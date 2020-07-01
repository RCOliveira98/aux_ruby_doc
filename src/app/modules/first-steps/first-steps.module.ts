import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstStepsRoutingModule } from './first-steps-routing.module';
import { SetupComponent } from './setup/setup.component';


@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    FirstStepsRoutingModule
  ]
})
export class FirstStepsModule { }
