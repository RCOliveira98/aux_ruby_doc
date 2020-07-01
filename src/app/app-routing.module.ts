import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'first_steps',
    loadChildren: () => import('./modules/firt-steps/firt-steps.module').then(m => m.FirtStepsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
