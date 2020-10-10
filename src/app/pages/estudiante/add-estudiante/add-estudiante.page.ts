import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Estudiante } from '../../../models/estudiante.interface';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { EstudianteService } from '../../../services/estudiante.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.page.html',
  styleUrls: ['./add-estudiante.page.scss'],
})
export class AddEstudiantePage implements OnInit {
  IdMateria = this.cookieService.get('cookie');

  estudiante: Estudiante = {
    nombre: '',
    apellido: '',
    curso: '',
    materia: this.IdMateria,
    primero: 0,
    segundo: 0,
    tercero: 0
  };

  estudianteId = null;

  constructor(private modalCtrl: ModalController, private nav: NavController,
    private todoService: EstudianteService, private loadingController: LoadingController,
    public navCtrl: NavController, public toastCrl: ToastController, private cookieService: CookieService) { }

  ngOnInit() {
    console.log(this.cookieService.get('cookie'));
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  async saveEstudiante(){
    if(this.estudiante.nombre=='' || this.estudiante.apellido==''){
      const toast = this.toastCrl.create({
        message: 'Digite los datos',
        duration: 3000,
        color: "danger"
      });
      (await toast).present();
    }else{
      const loading = await this.loadingController.create({
        message: 'Guardando......'
      });
      await loading.present();
      this.todoService.addEstudiante(this.estudiante).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/estudiante');
      });
      this.dismissModal();
    }
  }

}
