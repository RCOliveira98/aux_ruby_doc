import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutRubyComponent } from './about-ruby/about-ruby.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ruby', component: AboutRubyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
