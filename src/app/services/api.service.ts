import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/';
  httpsHeaders = new HttpHeaders(
    {'Content-Type': 'application/json',
      'Authorization':'Token 8fd4f17dc9efa464620af1c3eb06f6f6006e9f89'}
    );


  constructor( private http: HttpClient) { }

  getAllCollaborators() : Observable<any> {
    return this.http.get(this.baseUrl + 'collaborator/', 
    {headers: this.httpsHeaders}
    );
  };
}
