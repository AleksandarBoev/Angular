import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected title = 'input-output-click';

  protected receiveMessage(messageFromChildComponent: string): void {
    console.log(`Printing from "AppComponent" the message from the child: [${messageFromChildComponent}].`)
  }
}
