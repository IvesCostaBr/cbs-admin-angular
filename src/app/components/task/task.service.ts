import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from  '@angular/common/http';
import { TaskModel } from './task.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class TaskService {
  url = 'http://127.0.0.1:8000/';

  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  createTask(task:TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(this.url + 'task-api/', task).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    ) //Esse post vai retornar um observer |  < Generic >
  }



  listTask(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(this.url + 'task-api/').pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    ) //Esse post vai retornar um observer |  < Generic >
  }

  getTaskFromId(id:string | null) : Observable<TaskModel> {

    const urlBase = `${this.url}task-api/${id}/`;

    return this.http.get<TaskModel>(urlBase).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    ) //Esse post vai retornar um observer |  < Generic >
  }

  removeTask(id:string | null):Observable<TaskModel>{
    const urlBase = `${this.url}task-api/${id}/`;
    return this.http.delete<TaskModel>(urlBase).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    ) //Esse post vai retornar um observer |  < Generic >;
  }

  updateTask(task: TaskModel) {
    const urlBase = `${this.url}task-api/${task.id}/` ;
    return this.http.put(urlBase, task).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    ) //Esse post vai retornar um observer |  < Generic >
  }

  showThing(msg:string, erro:boolean = false) :void {
    this.snackBar.open(msg, 'X', {
      duration:10000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: erro?['msg-erro'] : ['msg-success'],
    })
  }

  handleError(e:any): Observable<any>{
    console.log(e)
    this.showThing("ocorreu um erro", true);
    return EMPTY

  }

}

