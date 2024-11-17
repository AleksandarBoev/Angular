import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipe } from './pipes/custom.pipe'
import {AsyncPipeComponent} from './pipes/async-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    AsyncPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
