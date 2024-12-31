import {Component, inject, model} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData, MatDialogComponent} from '../mat-dialog.component';

@Component({
  selector: 'app-dialog-popout',
  standalone: false,

  templateUrl: './dialog-popout.component.html',
  styleUrl: './dialog-popout.component.css'
})
export class DialogPopoutComponent {
  readonly dialogRef = inject(MatDialogRef<MatDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
