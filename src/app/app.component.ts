import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  lista = [];

  constructor(private api:ApiService){
    this.getCollaborators();
  };

  getCollaborators = () => {
    this.api.getAllCollaborators().subscribe(
    data => {
      this.lista = data;
      
    },
    error => {
      console.log('Deu um erro!');
    }  
    );
  };

}


