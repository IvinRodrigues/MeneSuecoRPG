import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CastleHallComponent } from './castle-hall/castle-hall.component';
import { CastleKitchenComponent } from './castle-kitchen/castle-kitchen.component';


const routes: Routes = [

  { path: '', redirectTo: 'hall', pathMatch: 'full' },
  { path: 'hall', component: CastleHallComponent },
  { path: 'kitchen', component: CastleKitchenComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CastleRoutingModule { }
