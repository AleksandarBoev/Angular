import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PromiseComponent} from "./promise/promise.component";
import {ObservableComponent} from "./observable/observable.component";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent, PromiseComponent, ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())], //provide method replaces putting HttpClientModule in the imports part.
  bootstrap: [AppComponent]
})
export class AppModule { }
