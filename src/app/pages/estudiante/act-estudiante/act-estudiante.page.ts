import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../../models/estudiante.interface';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { EstudianteService } from '../../../services/estudiante.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-act-estudiante',
  templateUrl: './act-estudiante.page.html',
  styleUrls: ['./act-estudiante.page.scss'],
})
export class ActEstudiantePage implements OnInit {
  IdMateria = this.cookieService.get('cookie');
  estudiante: Estudiante = {
    nombre: '',
    apellido: '',
    curso: '',
    materia: this.IdMateria,
    primero: null,
    segundo: null,
    tercero: null
  };
  estudianteId = null;

  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private todoService: EstudianteService, private loadingController: LoadingController,
    public navCtrl: NavController, public toastCrl: ToastController,
    private cookieService: CookieService
    ) { }

    ngOnInit() {
      this.estudianteId = this.route.snapshot.params['id'];
      if (this.estudianteId){
        this.loadEstudiante();
      }
    }

    async loadEstudiante(){
      const loading = await this.loadingController.create({
        message: 'Loading......'
      });
      await loading.present();
      this.todoService.getEstudiante(this.estudianteId).subscribe(res => {
        loading.dismiss();
        this.estudiante = res;
      });
    }

    async saveMateria(){
      if(this.estudiante.nombre=='' || this.estudiante.apellido==''){
        const toast = this.toastCrl.create({
          message: 'Digite los datos',
          duration: 3000,
          color: "danger"
        });
        (await toast).present();
      }else{
        const loading = await this.loadingController.create({
          message: 'Actualizando......'
        });
        await loading.present();
        this.todoService.updateEstudiante(this.estudiante, this.estudianteId).then(()=>{
          loading.dismiss();
          this.nav.navigateForward('/estudiante');
        });
      }
    }

    async saveNotas(){
      /*if(this.estudiante.primero=null || this.estudiante.segundo=null || this.estudiante.tercero=null){
        const toast = this.toastCrl.create({
          message: 'Digite las notas',
          duration: 3000,
          color: "danger"
        });
        (await toast).present();
      }*/
      if(this.estudiante.primero>5 || this.estudiante.segundo>5 || this.estudiante.tercero>5){
        const toast = this.toastCrl.create({
          message: 'Las notas no pueden ser mayores a 5',
          duration: 3000,
          color: "danger"
        });
        (await toast).present();
      }else{
        const loading = await this.loadingController.create({
          message: 'Actualizando......'
        });
        await loading.present();
        this.todoService.updateEstudiante(this.estudiante, this.estudianteId).then(()=>{
          loading.dismiss();
          this.nav.navigateForward('/estudiante');
        });
      }
    }
  
    onRemove(idestudiante:string){
      this.todoService.removeEstudiante(idestudiante);
    }

}
