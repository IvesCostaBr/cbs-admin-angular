import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskCrudComponent } from 'src/app/views/task-crud/task-crud.component';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  variavel = 'Módulo de Cadastro de Tarefas';

  constructor(private taskSevice:TaskService, private router:Router) { }

  ngOnInit(): void {

  }

  createTaskAction(){
    this.taskSevice.showThing("Operação excutado com succeso");
  }

    //metodo que está sendo chamado através bindign de atributo
  thingsFuntion(): void{
    console.log('fazendo algo');
  }

  backPage(){
    this.router.navigate(['/task']);

  }

}
