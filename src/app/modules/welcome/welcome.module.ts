import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutRubyComponent } from './about-ruby/about-ruby.component';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';

import { ListComponent } from './home/list/list.component';
import { CardImagesComponent } from './about-ruby/card-images/card-images.component';

const ngZorroAnt = [NzToolTipModule, NzListModule, NzAlertModule, NzCardModule];


@NgModule({
  declarations: [HomeComponent, AboutRubyComponent, ListComponent, CardImagesComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ngZorroAnt
  ]
})
export class WelcomeModule { }
