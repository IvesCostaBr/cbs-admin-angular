import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component'
import {TaskCrudComponent} from './views/task-crud/task-crud.component'

import {CreateTaskComponent} from './components/task/create-task/create-task.component';
import { EditTaskComponent } from './components/task/edit-task/edit-task.component';
import { TaskReadyComponent } from './components/task/task-ready/task-ready.component'
import { RemoveTaskComponent } from './components/task/remove-task/remove-task.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent,
},{
  path:"task",
  component: TaskCrudComponent,
},{
  path:'task/create',
  component: CreateTaskComponent,
},{
  path:'task/edit:id',
  component: EditTaskComponent,
},{
  path:'task/list',
  component: TaskReadyComponent,
},{
  path:'task/remove',
  component:RemoveTaskComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
