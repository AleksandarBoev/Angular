import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {CharacterComponent} from './characters/character/character.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterService} from './characters/character/character.service';
import {CharacterIntroComponent} from './characters/character-intro/character-intro.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ContactsComponent, CharactersComponent, CharacterComponent, CharacterIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
