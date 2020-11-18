import { Component, OnInit } from '@angular/core';
import { InterfaceChatService } from '../interface-chat/interface-chat.service';

@Component({
  selector: 'player-interface-map',
  templateUrl: './interface-map.component.html',
  styleUrls: ['./interface-map.component.scss']
})
export class InterfaceMapComponent implements OnInit {

  map: boolean = false
  chatStatus: boolean
  


  constructor( private chatService: InterfaceChatService ) {

    this.chatService.currentStatus.subscribe( response => { this.chatStatus = response } )

  }



  ngOnInit() {
  }



  testeScroll() {

    console.log( 'scrollará' )

  }



  changeMapCondition() {

    if(this.chatStatus == false) {

      this.map = !this.map

    }

  }



}
