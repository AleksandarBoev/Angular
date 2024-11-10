import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaxCountDirective,
      multi: true
    }
  ]
})
export class MaxCountDirective implements Validator {
  @Input() appMaxCount: number | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.value) {
      return null;
    }

    const valueToValidate = control.value;
    console.log('Validating text count value of: ' + valueToValidate.length); //logged EACH time I enter a character. So this means this method is executed on each char input

    //return null when there are NO issues. So the validation itself should be kind of backwards...
    //For example if I want max characters to be 20, then return null when char count is under 20.
    if (this.isValid(valueToValidate)) {
      return null;
    }

    //usually it is better to return this: {appMaxCount: this.appMaxCount} --> but am doing it for the testing
    return {appMaxCountResult: this.appMaxCount}; //what if I have more properties here? Can I use them somehow?
  }

  private isValid(valueToValidate: string) {
    return !this.appMaxCount || !valueToValidate || valueToValidate.length <= this.appMaxCount;
  }
}
