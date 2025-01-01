import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {MatAutoCompleteDemoComponent} from './mat-auto-complete-demo/mat-auto-complete-demo.component';
import {MatButtonToggleComponent} from './mat-button-toggle/mat-button-toggle.component';
import {MatCardComponent} from './mat-card/mat-card.component';
import {MatChipsComponent} from './mat-chips/mat-chips.component';
import {MatDialogComponent} from './mat-dialog/mat-dialog.component';
import {MatExpansionPanelComponent} from './mat-expansion-panel/mat-expansion-panel.component';
import {MatGridComponent} from './mat-grid/mat-grid.component';
import {MatListComponent} from './mat-list/mat-list.component';
import {MatMenuComponent} from './mat-menu/mat-menu.component';

const routes: Routes = [
  {path: 'mat-auto-complete', component: MatAutoCompleteDemoComponent},
  {path: 'mat-button-toggle', component: MatButtonToggleComponent},
  {path: 'mat-card', component: MatCardComponent},
  {path: 'mat-chips', component: MatChipsComponent},
  {path: 'mat-dialog', component: MatDialogComponent},
  {path: 'mat-expansion-panel', component: MatExpansionPanelComponent},
  {path: 'mat-grid', component: MatGridComponent},
  {path: 'mat-list', component: MatListComponent},
  {path: 'mat-menu', component: MatMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
