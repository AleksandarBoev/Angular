import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {MatAutoCompleteDemoComponent} from './mat-auto-complete-demo/mat-auto-complete-demo.component';
import {MatButtonToggleComponent} from './mat-button-toggle/mat-button-toggle.component';

const routes: Routes = [
  // {path: '', component: AppComponent}, //nothing special
  {path: 'mat-auto-complete', component: MatAutoCompleteDemoComponent},
  {path: 'mat-button-toggle', component: MatButtonToggleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
