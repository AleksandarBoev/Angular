import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-async-pipe',
  template: `
      <ul>
        <li *ngFor="let item of items$ | async">{{ item }}</li>
      </ul>
      <p *ngIf="!(items$ | async)">Loading items...</p>
  `
})
export class AsyncPipeComponent implements OnInit {
  items$: Observable<string[]> | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.items$ = this.dataService.getItems(); // Observable of items
  }
}
