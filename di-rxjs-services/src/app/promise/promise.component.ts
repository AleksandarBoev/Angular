import {Component} from "@angular/core";

@Component({
  selector: 'promise',
  template: '<button (click)="consoleLogMessage()">Promise Button</button>'
})
export class PromiseComponent {
  private counter: number = 0;

  consoleLogMessage(): void {
    this.getData().then(
      (result: string): void => {
        console.log(result)  // Handle success, which comes from "resolve"
      },
      (error: string): void => {
        console.log(error);  // Handle error, which comes from "reject"
      }
    );
  }

  // Function that returns a Promise to simulate fetching data asynchronously
  getData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.counter++ % 2 === 0) {
          resolve('Data fetched successfully cuz of even number!');  // Resolve the Promise on success
        } else {
          reject('Failed to fetch data cuz of odd number!');  // Reject the Promise on failure
        }
      }, 2000);  // Simulate a 2-second delay for the "fetch"
    });
  }
}
