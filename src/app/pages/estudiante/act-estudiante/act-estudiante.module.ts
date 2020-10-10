import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActEstudiantePageRoutingModule } from './act-estudiante-routing.module';

import { ActEstudiantePage } from './act-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActEstudiantePageRoutingModule
  ],
  declarations: [ActEstudiantePage]
})
export class ActEstudiantePageModule {}
