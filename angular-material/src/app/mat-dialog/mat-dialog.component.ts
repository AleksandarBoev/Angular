import {Component, inject, model, signal} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogPopoutComponent} from './dialog-popout/dialog-popout.component';

@Component({
  selector: 'app-mat-dialog',
  standalone: false,

  templateUrl: './mat-dialog.component.html',
  styleUrl: './mat-dialog.component.css'
})
export class MatDialogComponent {

  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPopoutComponent, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
