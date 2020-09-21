import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrayRoutingModule } from './array-routing.module';
import { IntroComponent } from './intro/intro.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [IntroComponent],
  imports: [
    CommonModule,
    ArrayRoutingModule,
    SharedModule
  ]
})
export class ArrayModule { }
