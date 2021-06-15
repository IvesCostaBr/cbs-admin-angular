import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _header = new BehaviorSubject<HeaderData>({
    title : 'Homepage',
    icon : 'home',
    routUrl: '/',
  })

  constructor() { }

  get headerGet():HeaderData {
    return this._header.value
  }

  set headerSet(header:HeaderData) {
    this._header.next(header)
  }
}
