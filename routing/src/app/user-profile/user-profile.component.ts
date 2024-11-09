import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  template: `
    <ul>
      <li>id: {{ user.id }}</li>
      <li>id: {{ user.role }}</li>
      <li>id: {{ user.sensitiveInformation }}</li>
    </ul>
  `
})
export class UserProfileComponent implements OnInit {
  private UNKNOWN: string = 'Unknown'

  user: User = {id: this.UNKNOWN, role: this.UNKNOWN, sensitiveInformation: this.UNKNOWN};

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data['user'];
  }
}
