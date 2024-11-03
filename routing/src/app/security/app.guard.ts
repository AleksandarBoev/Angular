import {CanActivateFn} from '@angular/router';
import {LocalStorage} from './local-storage';

export const canActivateProtectedPage: CanActivateFn = () => {
  return localStorage.getItem(LocalStorage.LOGGED_IN) === 'true';
};
