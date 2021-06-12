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
import { TaskCrudComponent } from './views/task-crud/task-crud.component';
import { ForDirective } from './directives/for.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavgationComponent,
    HomeComponent,
    TaskCrudComponent,
    ForDirective,
  ],
  imports: [ //TODO:sitemas de modulo padrão , quando importamos lá em cima temos que registralos em imports
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
