import { Component, OnInit } from '@angular/core';
import { InterfaceChatService } from 'src/app/game/player-interface/interface-chat/interface-chat.service';

@Component({
  selector: 'app-castle-kitchen',
  templateUrl: './castle-kitchen.component.html',
  styleUrls: ['./castle-kitchen.component.scss']
})
export class CastleKitchenComponent implements OnInit {




  constructor( private chatService: InterfaceChatService ) { }



  ngOnInit() {
  }



  openChat() {

    this.chatService.open()
    this.chatService.sendDialog('ihh vai com calma cara')

  }



}
