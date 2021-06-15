import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskUni : TaskModel = {
    id:0,
    title:'',
    description:'',
    owner:0
  }

  constructor(
    private task:TaskService,
    private router:Router,
    private routRequestParam: ActivatedRoute
    ){ }

  ngOnInit(): void {
    const id = this.routRequestParam.snapshot.paramMap.get('id')

    this.task.getTaskFromId(id).subscribe(task => {
      this.taskUni = task
    });
  }

  updateTask():void {
    this.task.updateTask(this.taskUni).subscribe( () => {
      this.task.showThing('Tarefa Atualizada')
      this.router.navigate(['/task'])
    })

  }
  backPage():void {
    this.router.navigate(['/task'])

  }
}
