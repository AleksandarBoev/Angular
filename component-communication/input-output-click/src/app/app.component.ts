import {Component} from '@angular/core';
import {User} from "./users/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected getUser(): User {
    return {name: 'Sasho', age: 28};
  }

  protected receiveMessage(userFromChildComponent: User): void { //handle the emitted event from child component
    console.log(`Printing from "AppComponent" the message from the child: [${this.getUserInformation(userFromChildComponent)}].`)
  }

  private getUserInformation(user: User): string { //get the user to send to child component
    return `name: ${user.name}, age: ${user.age}`;
  }
}
