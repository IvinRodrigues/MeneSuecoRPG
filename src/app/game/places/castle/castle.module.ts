import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CastleRoutingModule } from './castle-routing.module';
import { CastleHallComponent } from './castle-hall/castle-hall.component';
import { CastleKitchenComponent } from './castle-kitchen/castle-kitchen.component';


@NgModule({
  declarations: [
    CastleHallComponent,
    CastleKitchenComponent
  ],
  imports: [
    CommonModule,
    CastleRoutingModule
  ]
})
export class CastleModule { }
