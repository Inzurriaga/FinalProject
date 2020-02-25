import { User } from './../models/user';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

private url= "http://localhost:8090/api/event";

  constructor(private http: HttpClient, private authSrv: AuthService) { }

  index = () => {
    let credentials = this.authSrv.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };

    return this.http.get<any>(this.url, httpOptions).pipe()
  }

  show= (id: number)=> {
    let credentials = this.authSrv.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };

    return this.http.get<any>(this.url+"/"+id, httpOptions).pipe()

  }

  addUser= (id: number, user: User) => {
    let credentials = this.authSrv.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };

    return this.http.post<any>(this.url+"/"+id, user, httpOptions).pipe()

  }
 }

