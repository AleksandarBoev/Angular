import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {MatAutoCompleteDemoComponent} from './mat-auto-complete-demo/mat-auto-complete-demo.component';
import {MatButtonToggleComponent} from './mat-button-toggle/mat-button-toggle.component';
import {MatCardComponent} from './mat-card/mat-card.component';
import {MatChipsComponent} from './mat-chips/mat-chips.component';

const routes: Routes = [
  {path: 'mat-auto-complete', component: MatAutoCompleteDemoComponent},
  {path: 'mat-button-toggle', component: MatButtonToggleComponent},
  {path: 'mat-card', component: MatCardComponent},
  {path: 'mat-chips', component: MatChipsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
