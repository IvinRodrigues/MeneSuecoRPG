import { Component, OnInit } from '@angular/core';
import { EnemyService } from 'src/app/game/enemys/enemy.service';
import { InterfaceChatService } from 'src/app/game/player-interface/interface-chat/interface-chat.service';

@Component({
  selector: 'app-castle-hall',
  templateUrl: './castle-hall.component.html',
  styleUrls: ['./castle-hall.component.scss']
})
export class CastleHallComponent implements OnInit {

  constructor( private chatService: InterfaceChatService,
               private enemyService: EnemyService ) {
  }



  ngOnInit() {




  }



  openChat() {

    this.chatService.open()
    this.chatService.sendDialog(this.enemyService.getEnemy('andadorElefante'))

  }



}
