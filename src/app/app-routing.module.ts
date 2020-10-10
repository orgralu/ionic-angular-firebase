import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'materias/:id',
    loadChildren: () => import('./pages/materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./pages/materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./pages/estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'actestudiante/:id',
    loadChildren: () => import('./pages/estudiante/act-estudiante/act-estudiante.module').then( m => m.ActEstudiantePageModule)
  },
  {
    path: 'actestudiante',
    loadChildren: () => import('./pages/estudiante/act-estudiante/act-estudiante.module').then( m => m.ActEstudiantePageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notas/notas.module').then( m => m.NotasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
