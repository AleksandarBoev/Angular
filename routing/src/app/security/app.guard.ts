import {CanActivateFn} from '@angular/router';

export const canActivateProtectedPage: CanActivateFn = () => {
  return localStorage.getItem('hasAccess') === 'true';
};
