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
    this.characters.set('druid', {description: 'Green, brown. No metal armor.', skills: 'talks to and turns into animals'});
    this.characters.set('fighter', {description: 'Medium, metal armor. Nothing flashy.', skills: 'proficiency with all weapons'});
  }

  getCharacterByName(name: string): Character | undefined {
    return this.characters.get(name);
  }
}
