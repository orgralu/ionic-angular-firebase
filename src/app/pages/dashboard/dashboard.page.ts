import { Component, OnInit } from '@angular/core';
import { TaskI } from '../../models/materia.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  todos: TaskI[];

  constructor(private todoService: TodoService) {}

  ngOnInit(){
    this.todoService.getTodos().subscribe(res=>
      //console.log("Materias", res);
      this.todos = res
    );
  }

}
