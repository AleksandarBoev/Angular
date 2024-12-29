import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import { MatAutoCompleteDemoComponent } from './mat-auto-complete-demo/mat-auto-complete-demo.component';
import {MatFormField} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import { MatButtonToggleComponent } from './mat-button-toggle/mat-button-toggle.component';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    MatAutoCompleteDemoComponent,
    MatButtonToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggle,
    MatAutocomplete,
    MatOption,
    MatFormField,
    MatAutocompleteTrigger,
    FormsModule,
    MatInput,
    ReactiveFormsModule,
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
