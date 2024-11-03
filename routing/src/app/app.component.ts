import { Component } from '@angular/core';
import {LocalStorage} from './security/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';
    protected readonly localStorage = localStorage;
  protected readonly LocalStorage = LocalStorage;
}
