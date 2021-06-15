import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../templates/header/header.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private headerS:HeaderService) {

  }
  ngOnInit(): void {
  }

}
