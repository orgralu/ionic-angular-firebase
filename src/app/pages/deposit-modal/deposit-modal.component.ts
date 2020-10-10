import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskI } from '../../models/materia.interface';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent {
  todo: TaskI = {
    materia: ''
  };

  todoId = null;

  constructor(private modalCtrl: ModalController, private nav: NavController,
    private todoService: TodoService, private loadingController: LoadingController,
    public navCtrl: NavController, public toastCrl: ToastController) { }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  async saveMateria(){
    if(this.todo.materia==''){
      const toast = this.toastCrl.create({
        message: 'Digite la materia',
        duration: 3000,
        color: "danger"
      });
      (await toast).present();
    }else{
      const loading = await this.loadingController.create({
        message: 'Guardando......'
      });
      await loading.present();
      this.todoService.addTodo(this.todo).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/');
      });
      this.dismissModal();
    }
  }

}
