import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEstudiantePageRoutingModule } from './add-estudiante-routing.module';

import { AddEstudiantePage } from './add-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEstudiantePageRoutingModule
  ],
  declarations: [AddEstudiantePage]
})
export class AddEstudiantePageModule {}
