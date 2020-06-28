import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutRubyComponent } from './about-ruby/about-ruby.component';


@NgModule({
  declarations: [HomeComponent, AboutRubyComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
