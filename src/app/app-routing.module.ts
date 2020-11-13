import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', loadChildren: () => import('./title-screen/title-screen.module').then(m => m.TitleScreenModule) },
  { path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
