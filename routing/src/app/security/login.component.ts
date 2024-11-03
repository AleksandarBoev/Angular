import {Component} from '@angular/core';
import {LocalStorage} from './local-storage';
import {UserRoles} from './user-roles';

@Component({
  selector: 'app-login',
  template: `
    <h2>Enter Permission Code</h2>
    <input [(ngModel)]="permissionRole" placeholder="Enter ('{{UserRoles.USER}}' or '{{UserRoles.ADMIN}}')"/>
    <button (click)="grantAccess()">Submit</button>
    <p *ngIf="error">{{ error }}</p>
  `,
})
export class LoginComponent {
  permissionRole: string = '';
  error: string | null = null;

  constructor() {
  }

  grantAccess() {
    if (this.permissionRole.toUpperCase() === UserRoles.USER) {
      this.setUserDataToLocalStorage();
    } else if (this.permissionRole.toUpperCase() === UserRoles.ADMIN) {
      this.setAdminDataToLocalStorage();
    } else {
      this.error = 'Incorrect entry!';
      this.clearUserDataFromLocalStorage();
    }
  }

  private setUserDataToLocalStorage() {
    localStorage.setItem(LocalStorage.USER_ID, '2');
    localStorage.setItem(LocalStorage.LOGGED_IN, 'true');
    localStorage.setItem(LocalStorage.LOGGED_IN_USER, UserRoles.USER);
  }

  private setAdminDataToLocalStorage() {
    localStorage.setItem(LocalStorage.USER_ID, '1');
    localStorage.setItem(LocalStorage.LOGGED_IN, 'true');
    localStorage.setItem(LocalStorage.LOGGED_IN_USER, UserRoles.ADMIN);
  }

  private clearUserDataFromLocalStorage() {
    localStorage.removeItem(LocalStorage.USER_ID);
    localStorage.removeItem(LocalStorage.LOGGED_IN);
    localStorage.removeItem(LocalStorage.LOGGED_IN_USER);
  }

  protected readonly UserRoles = UserRoles;
}
