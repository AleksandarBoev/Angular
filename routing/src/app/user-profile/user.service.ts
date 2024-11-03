import {Injectable} from '@angular/core';
import {User} from './user';
import {UserRoles} from '../security/user-roles';

@Injectable({providedIn: 'root'})
export class UserService {
  getSingleUser(id: string | null): User {
    if (id === '1') {
      return {id: '1', role: UserRoles.ADMIN, sensitiveInformation: 'Keeper of time'}
    } else if (id === '2') {
      return {id: '2', role: UserRoles.USER, sensitiveInformation: 'Driving force of species'}
    } else {
      return {id: 'Fail', role: 'Fail', sensitiveInformation: 'Fail'}
    }
  }
}
