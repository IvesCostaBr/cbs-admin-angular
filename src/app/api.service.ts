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
      'Authorization':'Token 4ab9c4fbffb5b3d70bd840d9a27f11bd699e3402'}
    );


  constructor( private http: HttpClient) { }

  getAllCollaborators() : Observable<any> {
    return this.http.get(this.baseUrl + 'collaborator/', 
    {headers: this.httpsHeaders}
    );
  };
}
