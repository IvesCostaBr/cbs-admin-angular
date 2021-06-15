import { HeaderData } from './header-data.model';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService:HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.headerGet.title
  }

  get icon(): string {
    return this.headerService.headerGet.icon
  }

  get routUrl(): string {
    return this.headerService.headerGet.routUrl
  }

}
