import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabernRoutingModule } from './tabern-routing.module';
import { TabernSaloonComponent } from './tabern-saloon/tabern-saloon.component';
import { TabernBarComponent } from './tabern-bar/tabern-bar.component';
import { TabernBathroomComponent } from './tabern-bathroom/tabern-bathroom.component';


@NgModule({
  declarations: [TabernSaloonComponent, TabernBarComponent, TabernBathroomComponent],
  imports: [
    CommonModule,
    TabernRoutingModule
  ]
})
export class TabernModule { }
