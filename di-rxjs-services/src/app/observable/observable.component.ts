import {Component, ElementRef, ViewChild} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Country} from "./Country";

@Component({
  selector: 'observable',
  template: `
    <button (click)="printObservableData()">Print Observable Data</button>
    <button (click)="printObservableDataAgain()">Print Observable Data Again</button>
    <button (click)="getCountriesAndPrint()">Print countries</button>
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

  //-------------------DEMO 3----------------------
  constructor(private httpClient: HttpClient) {
  }

  private countriesUrl = 'https://restcountries.com/v2/all';
  private countriesCounter: number = 0;

  getCountriesAndPrint() {
    console.log(`Printing country ${this.countriesCounter}, ${this.countriesCounter + 1} and ${this.countriesCounter + 2}: `);
    this.httpClient.get<Country[]>(this.countriesUrl).subscribe(countries => {
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
}

