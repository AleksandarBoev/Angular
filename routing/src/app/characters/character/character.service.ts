import {Injectable, OnInit} from '@angular/core';
import {Character} from './Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characters: Map<string, Character> = new Map<string, Character>();

  constructor() {
    this.characters.set('bard', {description: 'Colorful, caries musical instruments.', skills: 'support magic'});
    this.characters.set('rogue', {description: 'Grey, dark. Caries hidden blades.', skills: 'sneak attacks'});
  }

  getCharacterByName(name: string): Character | undefined {
    return this.characters.get(name);
  }
}
