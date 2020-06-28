import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutRubyComponent } from './about-ruby/about-ruby.component';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzListModule } from 'ng-zorro-antd/list';
import { ListComponent } from './home/list/list.component';

const ngZorroAnt = [NzToolTipModule, NzListModule];


@NgModule({
  declarations: [HomeComponent, AboutRubyComponent, ListComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ngZorroAnt
  ]
})
export class WelcomeModule { }
