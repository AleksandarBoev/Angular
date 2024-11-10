import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MaxCountDirective} from '../character-creator-template/max-count.directive';

@Component({
  selector: 'app-character-creator-reactive',
  template: `
    <form [formGroup]="reactiveForm" (ngSubmit)="submitReactiveForm()">
      <div class="form-group">
        <label for="characterName">Name</label>
        <input type="text" id="characterName" formControlName="charName"/>
      </div>

      <div class="form-group">
        <label for="genderMale">{{ Gender.MALE }}</label>
        <input type="radio" id="genderMale" formControlName="gender" value="{{Gender.MALE}}"/>
        <label for="genderFemale">{{ Gender.FEMALE }}</label>
        <input type="radio" id="genderFemale" formControlName="gender" value="{{Gender.FEMALE}}"/>
      </div>

      <div class="form-group">
        <label for="race">Race:</label>
        <select id="race" formControlName="race">
          <option *ngFor="let race of getRaces()" [value]="race">{{ race }}</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  `
})
export class CharacterCreatorReactiveComponent {
  protected readonly Gender = Gender;

  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      charName: ['DefaultValue'], //can add validators here.
      gender: [''],
      race: ['']
    });
  }


  submitReactiveForm() {
    const character: Character = this.reactiveForm.value;
    console.log(character);
  }

  getRaces(): string[] {
    return Object.values(Race);
  }
}

interface Character {
  charName: string;
  gender: Gender;
  race: Race;
}

enum Gender {
  MALE = 'Male', FEMALE = 'Female'
}

enum Race {
  ELF = 'Elf', HUMAN = 'Human', DWARF = 'Dwarf'
}
