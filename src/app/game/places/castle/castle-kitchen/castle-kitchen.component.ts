import { Component, OnInit } from '@angular/core';
import { EnemyService } from 'src/app/game/enemys/enemy.service';
import { ItensService } from 'src/app/game/itens/itens.service';
import { InterfaceChatService } from 'src/app/game/player-interface/interface-chat/interface-chat.service';

@Component({
  selector: 'app-castle-kitchen',
  templateUrl: './castle-kitchen.component.html',
  styleUrls: ['./castle-kitchen.component.scss']
})
export class CastleKitchenComponent implements OnInit {




  constructor( private chatService: InterfaceChatService,
               private enemyService: EnemyService,
               private itensService: ItensService ) { }



  ngOnInit() {
  }



  openChat() {

    this.chatService.open()
    this.chatService.sendDialog(this.enemyService.getEnemy('natureba'))

  }



  openChest(item) {

    this.itensService.addItemInventory(item)

  }



}
