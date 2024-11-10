import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CharacterCreatorTemplateComponent} from './character-creator-template/character-creator-template.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaxCountDirective} from './character-creator-template/max-count.directive';
import {CharacterCreatorReactiveComponent} from './character-creator-reactive/character-creator-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCreatorTemplateComponent,
    MaxCountDirective,
    CharacterCreatorReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule //needed to do reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
