import {Component, OnInit} from '@angular/core';
import {CharacterService} from './character.service';
import {ActivatedRoute} from '@angular/router';
import {Character} from './Character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent implements OnInit {
  description: string = '';
  skills: string = '';

  constructor(private characterService: CharacterService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const characterPicked: string = params['character-name'];
      const character: Character | undefined = this.characterService.getCharacterByName(characterPicked);

      if (!character) {
        this.description = 'Unknown';
        this.skills = 'Unknown';
      } else {
        this.description = character.description;
        this.skills = character.skills;
      }
    });
  }
}
