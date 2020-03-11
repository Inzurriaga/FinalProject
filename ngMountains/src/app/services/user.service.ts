import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl + "/api/user";

  constructor(private http: HttpClient, private authSrv: AuthService) { }

  index = () => {
    let credentials = this.authSrv.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.get<User[]>(this.url, httpOptions).pipe();
  }

  show = (userName) => {
    let credentials = this.authSrv.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.get<User>(this.url+"/"+userName, httpOptions).pipe();
  }

  update = (user: User) => {
    let credentials = this.authSrv.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.put<User>(this.url+"/"+user.username, user, httpOptions).pipe();
  }
}
