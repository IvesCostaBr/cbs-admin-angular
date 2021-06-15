import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from  '@angular/common/http';
import { TaskModel } from './task.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',

})
export class TaskService {
  url = 'http://127.0.0.1:8000/';

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  createTask(task:TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(this.url + 'task-api/', task) //Esse post vai retornar um observer |  < Generic >
  }

  listTask(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.url + 'task-api/')
  }

  showThing(msg:string) :void {
    this.snackBar.open(msg, 'X', {
      duration:10000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }
}

