import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FirstStepsRoutingModule } from './first-steps-routing.module';

import { ngZorroFs } from './imports/ng-zorro-fs';
import { myModulesFs } from './imports/my-modules.fs';

import { declarationsFs } from './declarations/declarations-fs';

@NgModule({
  declarations: declarationsFs,
  imports: [
    CommonModule,
    FirstStepsRoutingModule,
    FormsModule,
    ngZorroFs,
    myModulesFs
  ]
})
export class FirstStepsModule { }
