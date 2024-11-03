import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  template: `
    <ul>
      <li>id: {{ stringOrUnknown(user.id) }}</li>
      <li>id: {{ stringOrUnknown(user.role) }}</li>
      <li>id: {{ stringOrUnknown(user.sensitiveInformation) }}</li>
    </ul>
  `
})
/*
  id: string,
  role: string,
  sensitiveInformation: string //imagine this is some stuff we do NOT want in the local storage, but need to load from a service for some components

 */
export class UserProfileComponent implements OnInit {
  private UNKNOWN: string = 'Unknown'

  user: User = {id: this.UNKNOWN, role: this.UNKNOWN, sensitiveInformation: this.UNKNOWN};

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data['user'];
  }

  stringOrUnknown(value: string): string {
    if (value) {
      return value;
    } else {
      return this.UNKNOWN;
    }
  }
}
