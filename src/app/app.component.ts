import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  collaborators = [
    {'user':7, 'company':'l.l.b.r', 'first_name':'ives'},
  ];


  constructor(private api:ApiService){
    this.getCollaborators();
  };

  getCollaborators = () => {
    this.api.getAllCollaborators().subscribe(
    data => {
      this.collaborators = data;
      
    },
    error => {
      console.log('Deu um erro!');
    }  
    );
  };

}


