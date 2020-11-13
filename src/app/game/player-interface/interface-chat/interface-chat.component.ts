import { Component, OnInit } from '@angular/core';
import { InterfaceChatService } from './interface-chat.service';

@Component({
  selector: 'player-interface-chat',
  templateUrl: './interface-chat.component.html',
  styleUrls: ['./interface-chat.component.scss']
})
export class InterfaceChatComponent implements OnInit {

  chatStatus: boolean = false
  enemy: any
  battle: boolean = false
  firstInteraction: boolean
  chatMessage: string



  constructor( private chatService: InterfaceChatService ) {

    this.chatService.currentStatus.subscribe( response => { this.chatStatus = response } )
    this.chatService.currentChatDialog.subscribe( response => {
      
      this.enemy = response
      this.chatMessage = response.dialog
      this.firstInteraction = true
    
      if(response !== false) {

        if(response.defeated.status) { this.chatMessage = this.enemy.defeated.answer }

      }
    
    })

  }



  ngOnInit() {

  }



  closeChat() {

    this.chatService.dismiss()

  }



  answerDialog(reaction) {

    if(reaction == 'fight') {

      this.battle = true
      this.firstInteraction = false

    }
    else {

      this.chatService.dismiss()

    }

  }



  run() {

    this.battle = false

  }



  battleResult(event) {

    this.battle = false

    if(event == 'victory') {

      this.chatMessage = this.enemy.fightResult.defeat

    }
    else if(event == 'defeat') {

      this.chatMessage = this.enemy.fightResult.victory

    }
    else if(event == 'run') {

      this.chatMessage = this.enemy.fightResult.run

    }

  }



}
