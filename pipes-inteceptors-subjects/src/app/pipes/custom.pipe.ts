import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excite'
})
export class CustomPipe implements PipeTransform {
  /**
   * First parameter is always the thing, which is on the left side of the pipe.
   * In this case, it is "value" of type "string". Which means this pipe is meant to be used
   * for strings.
   *
   * Every other parameter is whatever I want them to be. In the html, these parameters are passed
   * via double dots ":". To pass many parameters, just add many ":".
   *
   * Other parameters can also be functions!
   */
  transform(value: string, exclamationCount: number = 1, questionMarkCount: number = 0): string {
    if (!value) return '';
    const exclamations = '!'.repeat(exclamationCount);
    const questionMarks = '?'.repeat(questionMarkCount);
    return value.toUpperCase() + exclamations + questionMarks;
  }
}
