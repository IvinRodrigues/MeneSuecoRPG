import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CastleModule } from './places/castle/castle.module';
import { TabernModule } from './places/tabern/tabern.module';
import { PlayerInterfaceComponent } from './player-interface/player-interface.component';


const routes: Routes = [

  { path: '', component: PlayerInterfaceComponent, children: [

    { path: '', redirectTo: 'castle', pathMatch: 'full'},
    { path: 'tabern', loadChildren: () => import('./places/tabern/tabern.module').then(m => TabernModule ) },
    { path: 'castle', loadChildren: () => import('./places/castle/castle.module').then(m => CastleModule ) }

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
