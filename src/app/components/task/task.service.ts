import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private snackBar: MatSnackBar) { }

  showThing(msg:string) :void {
    this.snackBar.open(msg, '', {
      duration:300,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }
}
