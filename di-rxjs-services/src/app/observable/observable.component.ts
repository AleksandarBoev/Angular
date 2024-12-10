import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Country} from "./Country";

@Component({
  selector: 'observable',
  template: `
    <h1>Simple demos for observables</h1>
    <button (click)="printObservableData()">Print Observable Data</button>
    <button (click)="printObservableDataAgain()">Print Observable Data Again</button>
    <button (click)="getCountriesAndPrint()">Print countries</button>
    <hr/>
    <h1>Deep dive into Observables</h1>
    <button (click)="changeObservableToValues()">Obs with Values</button>
    <button (click)="changeObservableToErrors()">Obs with Errors</button>
    <button (click)="changeObservableToValuesAndErrors()">Obs with Mixed</button>
    <button (click)="completeObservable()">Complete Observable</button>
    <br/>
    <br/>
    <button (click)="subscribe1()">Sub1</button>
    <button (click)="subscribe2()">Sub2</button>
  `
})
export class ObservableComponent {
  //---------------------DEMO 1--------------------
  // Super simple demo. Just create an observable, fill it with data and finally subscribe to it.

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
  //Same demo, but a bit different.
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

  //-------------------DEMO 3----------------------
  //Classic use - making http calls.
  constructor(private httpClient: HttpClient) {
  }

  private countriesUrl = 'https://restcountries.com/v2/all';
  private countriesCounter: number = 0;

  getCountriesAndPrint() {
    console.log(`Printing country ${this.countriesCounter}, ${this.countriesCounter + 1} and ${this.countriesCounter + 2}: `);
    this.httpClient.get<Country[]>(this.countriesUrl) //send a request and return an observable, which contains data
      .subscribe(countries => { //immediately subscribe (use the data) from the observable
        console.log(this.getPrintInformation(countries[this.countriesCounter++]))
        console.log(this.getPrintInformation(countries[this.countriesCounter++]))
        console.log(this.getPrintInformation(countries[this.countriesCounter++]))
      });
  }

  private getPrintInformation(country: Country): string {
    return `
    name: "${this.getInfoOrGetMessage(country.name)}",
    capital: "${this.getInfoOrGetMessage(country.capital)}",
    region: "${this.getInfoOrGetMessage(country.region)}",
    subregion: "${this.getInfoOrGetMessage(country.subregion)}",
    population: "${this.getInfoOrGetMessage(country.population)}",
    borders: [${this.getInfoOrGetMessage(country.borders)}]`;
  }

  private getInfoOrGetMessage(data: any): any {
    if (!data) {
      return 'Information missing';
    } else {
      return data;
    }
  }

  //-------------------DEMO 4----------------------
  /*
    Deeper dive in how the observable works.

    For observables: when creating an observable, you pass on a function. This function fills the observable with data.
    Imagine this data being arrays.

    Calling "next" multiple times fills the "next" array.
    Calling "error" multiple times fills the "error" array.
    Calling "complete"... dunno what exactly it does.

    For observers (the ones that subscribe): there isn't really an observer. The moment something subscribes to
    the observable, it immediately goes through the data and does operations.
    The ".subscribe" method accepts an object, which has 3 methods:
    - next(data) --> the body of this function is executed once for every piece of data in the "next" array of the observable.
      Usually this is the case where everything went smoothly and the subscriber chooses to handle this by accessing the
      data and doing stuff with it.
    - error(data) --> similar to the next, but for the "error" array.
      Usually this is the case where there was an issue. Subscriber should choose to handle this by alerting the user.
      And maybe log something to an external system, so that devs can notice it and do something about it.
      And whatever else...
    - complete() --> stuff
 */

  private basicObservable: Observable<any> = new Observable<any>((subscriber => { //would have done "undefined", but IDE does not let me.
    subscriber.next('Default next value for observable');
  }));

  changeObservableToValues() {
    this.basicObservable = new Observable<any>((subscriber => {
      subscriber.next('Next string defined in observable!');
      subscriber.next('NEXT NEXT string defined in observable!');
    }));
  }

  changeObservableToErrors() {
    this.basicObservable = new Observable<any>((subscriber => {
      subscriber.error('Error string defined in observable');
    }));
  }

  changeObservableToValuesAndErrors() {
    this.basicObservable = new Observable<any>((subscriber => {
      subscriber.next('Mixed version: next');
      subscriber.error('Mixed version: error');
    }));
  }

  completeObservable() {
    this.basicObservable = new Observable<any>((subscriber => {
      subscriber.complete();
    }));
  }

  subscribe1() {
    this.basicObservable.subscribe({
      next: (data) => {
        console.log("Subscriber1: " + data)
      },
      error: (data) => {
        console.log("Subscriber1: " + data)
      },
      complete: () => {
        console.log('Subscriber1 Completed!')
      }
    })
  }

  subscribe2() {
    this.observerThingy();
  }

  observerThingy = () => {
    this.basicObservable.subscribe({
      next: (data) => {
        console.log("Hey, this is different type of handling of the observable! Well, not rly, but it could be! Subscriber2: " + data)
      },
      error: (data) => {
        console.error("Ok, now the next log will be of type error, which is kind of different! Subscriber2: " + data)
      },
      complete: () => {
        console.log('Nah, can not think of anything original here... Subscriber2 Completed!')
      }
    })
  }
}

