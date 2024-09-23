import {Component, ElementRef, ViewChild} from "@angular/core";
import {Observable} from "rxjs";

@Component({
  selector: 'observable',
  template: `
    <button (click)="printObservableData()">Print Observable Data</button>
    <button (click)="printObservableDataAgain()">Print Observable Data Again</button>
  `
})
export class ObservableComponent {
  //---------------------DEMO 1--------------------
  private counter: number = 0;

  printObservableData() {
    const o: Observable<any> = new Observable<any>((subscriber => {
      subscriber.next(this.counter++);
      subscriber.next(this.counter++);
      subscriber.next(this.counter++);
    }));

    o.subscribe((data) => {
      console.log(`Demo 1, Observable Data: ${data}`);
    })
  }

  //---------------------DEMO 2--------------------
  private observable: Observable<any> = new Observable<any>((subscriber => {
    subscriber.next(10);
    subscriber.next(20);
    subscriber.next(30);
  }));

  printObservableDataAgain(): void { //data in observable is NOT consumed. It stays there and gets console logged multiple times
    this.observable.subscribe((data) => {
      console.log(`Demo2, Observable1 Data: ${data}`);
    })
  }
}

