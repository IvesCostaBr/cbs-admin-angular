import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { TaskService } from 'src/app/components/task/task.service';
@Component({
  selector: 'app-task-crud',
  templateUrl: './task-crud.component.html',
  styleUrls: ['./task-crud.component.css']
})
export class TaskCrudComponent implements OnInit {



  constructor(private router: Router, private api: TaskService) { }

  ngOnInit(): void {
  }

  navigateToCreateTask():void {
    this.router.navigate(['task/create'])
  }

  navigateToListTasks():void {
    this.router.navigate(['task/create'])
  }

}
