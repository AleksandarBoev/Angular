import {Component, EventEmitter, Input, Output} from "@angular/core";
import {User} from "../users/user";

@Component({
  selector: 'child',
  templateUrl: './child.html'
})
export class ChildComponent {
  @Output()
  private childEventEmitter: EventEmitter<User>; //output this value to parent component
  @Input() user: User = {name: 'default name', age: 123}; //value will come in from parent component

  constructor() {
    this.childEventEmitter = new EventEmitter<User>();
  }

  protected getUserInformation(): string {
    return `Hello, ${this.user.name}, who is ${this.user.age} years old. How do you do?`;
  }

  sendEvent(): void {
    const user: User = {name: 'Sasho', age: 28};
    this.childEventEmitter.emit(user);
  }
}
