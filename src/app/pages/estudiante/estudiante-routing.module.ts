import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantePage } from './estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: EstudiantePage
  },
  {
    path: 'add-estudiante',
    loadChildren: () => import('./add-estudiante/add-estudiante.module').then( m => m.AddEstudiantePageModule)
  },
  {
    path: 'act-estudiante',
    loadChildren: () => import('./act-estudiante/act-estudiante.module').then( m => m.ActEstudiantePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantePageRoutingModule {}
