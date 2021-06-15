import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavgationComponent } from './components/templates/navgation/navgation.component';

import  { MatSidenavModule } from '@angular/material/sidenav';
import  { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';

import  { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TaskCrudComponent } from './views/task-crud/task-crud.component';
import { ForDirective } from './directives/for.directive';
import { CreateTaskComponent } from './components/task/create-task/create-task.component';
import { RemoveTaskComponent } from './components/task/remove-task/remove-task.component';
import { EditTaskComponent } from './components/task/edit-task/edit-task.component';
import { UpdateTaskComponent } from './components/task/update-task/update-task.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaskReadyComponent } from './components/task/task-ready/task-ready.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavgationComponent,
    HomeComponent,
    TaskCrudComponent,
    ForDirective,
    CreateTaskComponent,
    RemoveTaskComponent,
    EditTaskComponent,
    UpdateTaskComponent,
    TaskReadyComponent,
    ListTaskComponent,
  ],
  imports: [ //TODO:sitemas de modulo padrão , quando importamos lá em cima temos que registralos em imports
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
