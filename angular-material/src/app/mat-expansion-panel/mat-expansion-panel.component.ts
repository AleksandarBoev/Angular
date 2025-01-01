import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-mat-expansion-panel',
  standalone: false,

  templateUrl: './mat-expansion-panel.component.html',
  styleUrl: './mat-expansion-panel.component.css'
})
export class MatExpansionPanelComponent {
  readonly panelOpenState = signal(false);
}
