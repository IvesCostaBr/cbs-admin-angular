import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskModel } from '../task.model'

@Component({
  selector: 'app-task-read',
  templateUrl: './task-ready.component.html',
  styleUrls: ['./task-ready.component.css']
})

export class TaskReadyComponent implements OnInit {

  displayedColumns  = ['id', 'title', 'description', 'owner', 'actions']
  tasksList : TaskModel[] = [];

  constructor(private api:TaskService) { }

  ngOnInit(): void {
    this.api.listTask().subscribe(data =>{
     this.tasksList = data
     localStorage.setItem('taskList', 'myname')

    })
  }

}

