import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { PlayerInterfaceComponent } from './player-interface/player-interface.component';
import { InterfaceHudComponent } from './player-interface/interface-hud/interface-hud.component';
import { InterfaceInventoryComponent } from './player-interface/interface-inventory/interface-inventory.component';
import { InterfaceMapComponent } from './player-interface/interface-map/interface-map.component';
import { InterfaceChatComponent } from './player-interface/interface-chat/interface-chat.component';
import { InterfaceBattleComponent } from './player-interface/interface-battle/interface-battle.component';


@NgModule({
  declarations: [
    PlayerInterfaceComponent,
    InterfaceHudComponent,
    InterfaceInventoryComponent,
    InterfaceMapComponent,
    InterfaceChatComponent,
    InterfaceBattleComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
