import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MonthVisualizerComponent} from "./month-visualizer/month-visualizer.component";

@NgModule({
  declarations: [
    AppComponent, MonthVisualizerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
