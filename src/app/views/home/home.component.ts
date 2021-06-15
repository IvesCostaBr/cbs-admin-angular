import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerS:HeaderService) {
    headerS.headerSet = {
      title:'Inicio',
      icon:'home',
      routUrl : '',

  }
   }

  ngOnInit(): void {
  }

}
