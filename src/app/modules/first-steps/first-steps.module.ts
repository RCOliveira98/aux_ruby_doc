import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FirstStepsRoutingModule } from './first-steps-routing.module';
import { SetupComponent } from './setup/setup.component';
import { ButtonsPhasesComponent } from './buttons-phases/buttons-phases.component';
import { InstallationComponent } from './setup/installation/installation.component';
import { LinuxComponent } from './setup/installation/linux/linux.component';
import { WindowsComponent } from './setup/installation/windows/windows.component';
import { MacOsxComponent } from './setup/installation/mac-osx/mac-osx.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { HelloWordComponent } from './input-output/hello-word/hello-word.component';
import { AuxToolsComponent } from './setup/installation/aux-tools/aux-tools.component';
import { IntroToolsComponent } from './setup/installation/aux-tools/intro-tools/intro-tools.component';
import { ImageToolsComponent } from './setup/installation/aux-tools/image-tools/image-tools.component';
import { IstallToolsComponent } from './setup/installation/aux-tools/istall-tools/istall-tools.component';
import { IdeComponent } from './setup/installation/aux-tools/ide/ide.component';
import { ReaderComponent } from './input-output/reader/reader.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTypesComponent } from './data-types/data-types.component';
import { StringTypeComponent } from './data-types/string-type/string-type.component';
import { IntroStringTypeComponent } from './data-types/string-type/intro-string-type/intro-string-type.component';
import { StringInterpolationComponent } from './data-types/string-type/string-interpolation/string-interpolation.component';

const ngZorroAnt = [
  NzIconModule,
  NzCollapseModule,
  NzSelectModule,
  NzAlertModule,
  NzCardModule,
  NzListModule
];

@NgModule({
  declarations: [
    SetupComponent,
    ButtonsPhasesComponent,
    InstallationComponent,
    LinuxComponent,
    WindowsComponent,
    MacOsxComponent,
    InputOutputComponent,
    HelloWordComponent,
    AuxToolsComponent,
    IntroToolsComponent,
    ImageToolsComponent,
    IstallToolsComponent,
    IdeComponent,
    ReaderComponent,
    DataTypesComponent,
    StringTypeComponent,
    IntroStringTypeComponent,
    StringInterpolationComponent
  ],
  imports: [
    CommonModule,
    FirstStepsRoutingModule,
    FormsModule,
    ngZorroAnt,
    FontAwesomeModule
  ]
})
export class FirstStepsModule { }
