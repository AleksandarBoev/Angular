import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from './user';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {LocalStorage} from '../security/local-storage';

@Injectable(
  {providedIn: 'root'}
)
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot): User | Observable<User> | Promise<User> {
    const id: string | null = localStorage.getItem(LocalStorage.USER_ID);
    return this.userService.getSingleUser(id);
  }

}
