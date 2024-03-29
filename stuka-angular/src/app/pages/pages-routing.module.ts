import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  { 
    path: '', component: PagesComponent,
    children: [
      { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
      { path: '', redirectTo: 'inicio' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
