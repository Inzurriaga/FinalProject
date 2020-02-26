import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  upload = (image) => {
    return this.http.post("https://api.imageshack.com/v2/images", image)
  }
}
