import {Component} from '@angular/core';

@Component({
  selector: 'app-generate-error',
  template: `
    <button (click)="generateError()">Generate Error</button>
  `
})
export class GenerateErrorComponent {

  generateError() {
    const nullObject = null;
    // @ts-ignore
    console.log(nullObject.hello); //throws "TypeError". Dunno why not NPE like in Java, but w/e
  }
}
