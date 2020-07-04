import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FirstStepsRoutingModule } from './first-steps-routing.module';
import { SetupComponent } from './setup/setup.component';
import { ButtonsPhasesComponent } from './setup/buttons-phases/buttons-phases.component';
import { InstallationComponent } from './setup/installation/installation.component';
import { LinuxComponent } from './setup/installation/linux/linux.component';
import { WindowsComponent } from './setup/installation/windows/windows.component';
import { MacOsxComponent } from './setup/installation/mac-osx/mac-osx.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';


const ngZorroAnt = [NzIconModule, NzCollapseModule, NzSelectModule];

@NgModule({
  declarations: [
    SetupComponent,
    ButtonsPhasesComponent,
    InstallationComponent,
    LinuxComponent,
    WindowsComponent,
    MacOsxComponent
  ],
  imports: [
    CommonModule,
    FirstStepsRoutingModule,
    FormsModule,
    ngZorroAnt
  ]
})
export class FirstStepsModule { }
