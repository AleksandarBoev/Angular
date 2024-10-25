import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h2>Enter Permission Code</h2>
    <input [(ngModel)]="permissionCode" placeholder="Enter code" />
    <button (click)="grantAccess()">Submit</button>
    <p *ngIf="error">{{ error }}</p>
  `,
})
export class LoginComponent {
  permissionCode: string = '';
  error: string | null = null;

  constructor() {}

  grantAccess() {
    if (this.permissionCode.toLowerCase() === 'mellon') {
      localStorage.setItem('hasAccess', 'true');
      console.log('You can now read the sacred texts');
    } else {
      this.error = 'Incorrect permission code!';
      localStorage.setItem('hasAccess', 'false');
    }
  }
}
