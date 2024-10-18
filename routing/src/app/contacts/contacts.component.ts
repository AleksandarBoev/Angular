import {Component} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {
  email: string = 'aaa@gmail.com';
  phone: string = '+123 456 78';
}
