import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-character-creator-template',
  template: `
    <form #characterForm="ngForm" (ngSubmit)="createCharacter()">
      <div class="form-group">
        <label for="characterName">Name</label>
        <input type="text" id="characterName" name="charName" ngModel/>
      </div>

      <div class="form-group">
        <label for="genderMale">{{ Gender.MALE }}</label>
        <input type="radio" id="genderMale" name="gender" value="{{Gender.MALE}}" ngModel/>
        <label for="genderFemale">{{ Gender.FEMALE }}</label>
        <input type="radio" id="genderFemale" name="gender" value="{{Gender.FEMALE}}" ngModel/>
      </div>

      <div class="form-group">
        <label for="race">Race:</label>
        <select id="race" name="race" ngModel required #raceInput='ngModel'>
          <option *ngFor="let race of getRaces()" [value]="race">{{ race }}</option>
        </select>
      </div>
<!--Validating like this is considered a Template Driven approach. If you validate stuff in the component code, then it is more like reactive forms-->
      <div *ngIf="raceInput.touched"> <!--if input has been interacted with-->
        <p *ngIf="raceInput.errors?.['required']">Race is required!</p>  <!--get a list of errors. And specifically the required one-->
      </div>

      <button>Submit</button>
    </form>
  `
})
export class CharacterCreatorTemplateComponent {
  protected readonly Gender = Gender;

  @ViewChild('characterForm') form: NgForm | undefined;

  createCharacter() {
    if (!this.form) {
      return;
    }

    /*
    Pass the values from the form to Character object.
    For this to be successful out of the box, the "name" attribute in the <input/> needs to match the field name
    from the object.
    But you can always just make mapping functionality and do it yourself.
     */
    const character: Character = this.form.value as Character;

    console.log(character);
    console.log(this.form.value.charName);
  }

  getRaces(): string[] {
    return Object.values(Race);
  }
}

interface Character {
  charName: string;
  gender: Gender;
  race: Race
}

enum Gender {
  MALE = 'Male', FEMALE = 'Female'
}

enum Race {
  ELF = 'Elf', HUMAN = 'Human', DWARF = 'Dwarf'
}
