import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskModel:TaskModel = {
    id : 0,
    title:'',
    description:'',
    owner:0,
  }

  constructor(private taskSevice:TaskService, private router:Router) { }

  ngOnInit(): void {

  }

  createTaskAction(){
    this.taskSevice.createTask(this.taskModel).subscribe(()=> {
      this.taskSevice.showThing("Tarefa Criada com successo");
      this.router.navigate(['/task']);
    })

  }

    //metodo que está sendo chamado através bindign de atributo
  thingsFuntion(): void{
    console.log('fazendo algo');
  }

  backPage(){
    this.router.navigate(['/task']);

  }

}
