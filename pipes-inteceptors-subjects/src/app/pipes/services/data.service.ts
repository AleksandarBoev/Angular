import { Injectable } from '@angular/core';
import {delay, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getItems(): Observable<string[]> {
    // Simulate fetching data with a delay
    return of(['Item 1', 'Item 2', 'Item 3']).pipe(delay(2000));
  }
}
