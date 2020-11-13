import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabernBarComponent } from './tabern-bar/tabern-bar.component';
import { TabernBathroomComponent } from './tabern-bathroom/tabern-bathroom.component';
import { TabernSaloonComponent } from './tabern-saloon/tabern-saloon.component';


const routes: Routes = [

  { path: '', redirectTo: 'saloon', pathMatch: 'full' },
  { path: 'saloon', component: TabernSaloonComponent },
  { path: 'bar', component: TabernBarComponent },
  { path: 'bathroom', component: TabernBathroomComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabernRoutingModule { }
