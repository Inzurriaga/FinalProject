import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class EventService {

private url= "http://localhost:8090"

  constructor(private http: HttpClient) { }

  index = () => {
    return this.http.get<any>(this.url).pipe()
  }

}
