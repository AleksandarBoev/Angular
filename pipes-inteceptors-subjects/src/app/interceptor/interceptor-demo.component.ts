import {Component} from '@angular/core';
import {PostObject, RestCountriesService} from './rest-countries.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-interceptor-demo',
  template: `
    <p *ngIf="postObject">{{ postObject.body }}</p>
    <button (click)="callValidUrl()">Call valid URL
    </button> <!--Check the Network tab on the browser, header section of the request, to verify that this header has been sent.-->
    <br/>
    <button (click)="callInvalidUrl()">Call invalid URL</button>
  `
})
export class InterceptorDemoComponent {
  postObject: PostObject | undefined;

  constructor(private restCountriesService: RestCountriesService) {
  }

  callValidUrl() {
    this.restCountriesService.sendRequestToValidUrl().subscribe(nextResponse =>
      this.postObject = nextResponse
    );
  }

  callInvalidUrl() {
    this.restCountriesService.sendRequestToInvalidUrl().subscribe(nextResponse =>
      this.postObject = nextResponse
    );
  }
}
