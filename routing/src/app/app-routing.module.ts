import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterComponent} from './characters/character/character.component';
import {CharacterIntroComponent} from './characters/character-intro/character-intro.component';
import {SecretDoorComponent} from './secret-room/secret-door/SecretDoorComponent';
import {SecretRoomComponent} from './secret-room/SecretRoomComponent';
import {PageNotFoundComponent} from './page-not-found/PageNotFoundComponent';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {
    path: 'characters', component: CharactersComponent, children: [
      {path: 'intro', component: CharacterIntroComponent},
      {path: ':character-name', component: CharacterComponent}
    ]
  },
  {path: 'secret-door', component: SecretDoorComponent},
  {path: 'secret-room', component: SecretRoomComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
