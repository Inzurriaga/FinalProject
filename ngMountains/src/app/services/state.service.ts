import { State } from './../models/state';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private url= "http://localhost:8090/api/state";

  constructor(private http: HttpClient, private authSrv: AuthService) { }


  index(): any{
    return this.http.get<State[]>(this.url).pipe();
  }
}
