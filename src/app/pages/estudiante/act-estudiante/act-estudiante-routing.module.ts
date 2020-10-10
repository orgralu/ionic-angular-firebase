import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActEstudiantePage } from './act-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: ActEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActEstudiantePageRoutingModule {}
