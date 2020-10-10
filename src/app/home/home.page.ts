import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TaskI } from '../models/materia.interface';
import { TodoService } from '../services/todo.service';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from '../pages/deposit-modal/deposit-modal.component';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todos: TaskI[];

  constructor(
    private todoService: TodoService,
    private modalCtrl: ModalController
    ) {}

  ngOnInit(){
    this.todoService.getTodos().subscribe(res=>
      //console.log("Materias", res);
      this.todos = res
    );
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: DepositModalComponent
    });
    await modal.present();
  }

}
