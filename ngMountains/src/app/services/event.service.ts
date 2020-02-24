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
}
