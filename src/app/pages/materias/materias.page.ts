import { Component, OnInit } from '@angular/core';
import { TaskI } from '../../models/materia.interface';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {
  todo: TaskI = {
    materia: ''
  };

  todoId = null;
  materia: string = '';

  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private todoService: TodoService, private loadingController: LoadingController,
    public navCtrl: NavController, public toastCrl: ToastController,
    private cookieService: CookieService
    ) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId){
      this.loadTodo();
    }
    this.cookieService.set('cookie', this.route.snapshot.params['id']);
    //this.cookieService.get('cookie');
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading......'
    });
    await loading.present();
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
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
        message: 'Actualizando......'
      });
      await loading.present();
      this.todoService.updateTodo(this.todo, this.todoId).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    }
  }

  onRemove(idtodo:string){
    this.todoService.removeTodo(idtodo);
    this.borrarCookie();
  }

  borrarCookie(){
    this.cookieService.deleteAll('cookie');
    this.nav.navigateForward('/');
  }

}
