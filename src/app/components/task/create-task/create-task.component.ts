import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  variavel = 'Módulo de Cadastro de Tarefas';

  constructor() { }

  ngOnInit(): void {
  }

  thingsFuntion(): void{
    console.log('fazendo algo');
  }


}
