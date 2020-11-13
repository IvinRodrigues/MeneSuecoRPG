import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleScreenRoutingModule } from './title-screen-routing.module';
import { TitleScreenMainMenuComponent } from './title-screen-main-menu/title-screen-main-menu.component';


@NgModule({
  declarations: [TitleScreenMainMenuComponent],
  imports: [
    CommonModule,
    TitleScreenRoutingModule
  ]
})
export class TitleScreenModule { }
