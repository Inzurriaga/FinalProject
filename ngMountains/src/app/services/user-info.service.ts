import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private url = "http://localhost:8090"

  constructor(private http: HttpClient, private authSrv: AuthService) { }

  show = (userName) => {
    let credentials = this.authSrv.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.get(this.url+"/"+userName, httpOptions).pipe();
  }
}
