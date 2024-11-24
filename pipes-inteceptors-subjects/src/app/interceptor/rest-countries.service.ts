import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {
  private validUrl: string = 'https://jsonplaceholder.typicode.com/posts/1';
  private invalidUrl: string = 'https://jsonplaceholder.typicode.com/asd';

  constructor(private http: HttpClient) { }

  sendRequestToValidUrl(): Observable<PostObject> {
    return this.http.get<PostObject>(this.validUrl);
  }

  sendRequestToInvalidUrl(): Observable<PostObject> {
    return this.http.get<PostObject>(this.invalidUrl);
  }
}

export interface PostObject {
  "userId": number,
  "id": number,
  "title": string,
  "body": string
}
