import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CharacterCreatorTemplateComponent} from './character-creator-template/character-creator-template.component';
import {FormsModule} from '@angular/forms';
import {MaxCountDirective} from './character-creator-template/max-count.directive';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCreatorTemplateComponent,
    MaxCountDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
