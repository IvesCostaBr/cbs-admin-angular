import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskModel } from '../task.model'

@Component({
  selector: 'app-task-ready',
  templateUrl: './task-ready.component.html',
  styleUrls: ['./task-ready.component.css']
})

export class TaskReadyComponent implements OnInit {

  tasks : TaskModel[] = [];

  constructor(private api:TaskService) { }

  ngOnInit(): void {
    this.api.listTask().subscribe(listaTask =>{
     this.tasks = listaTask
     console.log(listaTask)

    })
  }

}

