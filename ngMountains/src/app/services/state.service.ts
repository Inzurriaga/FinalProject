import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private url= "http://localhost:8090/api/state";

  constructor(private http: HttpClient, private authSrv: AuthService) { } 
  
  
  index(){
    let credentials = this.authSrv.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.get(this.url,httpOptions).pipe();
  }
}
