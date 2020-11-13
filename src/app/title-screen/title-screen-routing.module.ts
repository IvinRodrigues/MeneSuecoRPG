import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleScreenMainMenuComponent } from './title-screen-main-menu/title-screen-main-menu.component';


const routes: Routes = [

  { path: '', component: TitleScreenMainMenuComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitleScreenRoutingModule { }
