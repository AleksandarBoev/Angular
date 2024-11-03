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
import {LoginComponent} from './security/login.component';
import {SacredTextsComponent} from './sacred-texts/sacred-texts.component';
import {canActivateProtectedPage} from './security/app.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserResolver} from './user-profile/user.resolver';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //when a user lands on this path, they are immediately redirected.
  {path: 'home', component: HomeComponent}, //nothing special
  {path: 'contacts', component: ContactsComponent}, //nothing special
  {
    path: 'characters', component: CharactersComponent, children: [ //page with sub-pages. Example: /characters/intro
      {path: 'intro', component: CharacterIntroComponent}, //nothing special
      {path: ':character-name', component: CharacterComponent} //":character-name" is the path param name. So if page is "characters/rogue" then "character-name" path param value will be "rogue"
    ]
  },
  {path: 'secret-door', component: SecretDoorComponent}, //page for entering secret-room. If correct input --> programmatically redirect user to secret room
  {path: 'secret-room', component: SecretRoomComponent}, //nothing special
  {path: 'login', component: LoginComponent}, //adding the permission needed for accessing the Sacred Texts
  {path: 'sacred-texts', component: SacredTextsComponent, canActivate: [canActivateProtectedPage]}, //can be viewed only if permission is granted
  {path: 'user-profile', component: UserProfileComponent, resolve: {user: UserResolver}}, //pre-loads user data via resolver and passes it to component
  {path: '**', component: PageNotFoundComponent} //THIS HAS TO BE LAST, OR IT BREAKS THE ROUTINGS BELOW IT
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
