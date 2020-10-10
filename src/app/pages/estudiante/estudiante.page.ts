import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante.interface';
import { EstudianteService } from '../../services/estudiante.service';
import { ModalController } from '@ionic/angular';
import { AddEstudiantePage } from './add-estudiante/add-estudiante.page';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {
  estudiantes: Estudiante[];
  IdMateria = '';
  temp: number;

  constructor(
    private estudianteService: EstudianteService,
    private modalCtrl: ModalController,
    private cookieService: CookieService
    ) { }

  ngOnInit() {
    this.IdMateria = this.cookieService.get('cookie');
    this.estudianteService.getEstudiantes().subscribe(res=>
      this.estudiantes = res
    );
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: AddEstudiantePage
    });
    await modal.present();
  }

}
