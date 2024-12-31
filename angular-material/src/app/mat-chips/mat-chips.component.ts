import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-mat-chips',
  standalone: false,

  templateUrl: './mat-chips.component.html',
  styleUrl: './mat-chips.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatChipsComponent {
  /*
  Note:
  And the IDE did not recommend all the needed imports. So I manually added these:

    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
   */

  private signalValues = ['angular', 'how-to', 'tutorial', 'accessibility'];
  readonly templateKeywords = signal(this.signalValues);

  announcer = inject(LiveAnnouncer);

  removeTemplateKeyword(keyword: string) {
    this.templateKeywords.update(keywords => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }

      keywords.splice(index, 1);
      this.signalValues.splice(index, 1);
      this.announcer.announce(`removed ${keyword} from template form`);
      return [...keywords];
    });
  }

  addTemplateKeyword(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.templateKeywords.update(keywords => [...keywords, value]);
      this.signalValues.push(value);
      this.announcer.announce(`added ${value} to template form`);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  searchMemory() {
    debugger;
    console.log(this.signalValues);
  }
}
