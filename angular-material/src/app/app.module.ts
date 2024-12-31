import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import { MatAutoCompleteDemoComponent } from './mat-auto-complete-demo/mat-auto-complete-demo.component';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInput, MatInputModule} from '@angular/material/input';
import { MatButtonToggleComponent } from './mat-button-toggle/mat-button-toggle.component';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import { MatCardComponent } from './mat-card/mat-card.component';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import { MatChipsComponent } from './mat-chips/mat-chips.component';
import {MatChipGrid, MatChipInput, MatChipRow, MatChipsModule} from "@angular/material/chips";
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { DialogPopoutComponent } from './mat-dialog/dialog-popout/dialog-popout.component';
import {MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MatAutoCompleteDemoComponent,
    MatButtonToggleComponent,
    MatCardComponent,
    MatChipsComponent,
    MatDialogComponent,
    DialogPopoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggle,
    MatAutocomplete,
    MatCardModule,
    MatIconModule,
    MatOption,
    MatFormFieldModule,
    MatChipsModule,
    MatFormField,
    MatInputModule,
    MatAutocompleteTrigger,
    FormsModule,
    MatInput,
    ReactiveFormsModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatChipRow,
    MatChipGrid,
    MatChipInput,
    MatIcon,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
