import { Component } from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mat-spinner',
  standalone: false,

  templateUrl: './mat-spinner.component.html',
  styleUrl: './mat-spinner.component.css'
})
export class MatSpinnerComponent {
  modeValue: ProgressSpinnerMode = LoadingState.LOADING;


  setLoading() {
    this.modeValue = LoadingState.LOADING;
  }

  setDone() {
    this.modeValue = LoadingState.DONE;
  }
}

enum LoadingState {
  LOADING = 'indeterminate', DONE = 'determinate'
}
