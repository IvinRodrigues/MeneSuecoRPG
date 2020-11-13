import { Component, OnInit } from '@angular/core';
import { PlayerSerivce } from '../player/player.service';
import { player } from './../player/player'

@Component({
  selector: 'app-player-interface',
  templateUrl: './player-interface.component.html',
  styleUrls: ['./player-interface.component.scss']
})
export class PlayerInterfaceComponent implements OnInit {

  die: boolean = false



  constructor( private playerService: PlayerSerivce ) {

    this.playerService.currentPlayerStatus.subscribe(

      response => {

        if(response.health <= 0) {

          this.gameOver()

        }

      }

    )

  }



  ngOnInit() {

  }



  gameOver() {

    this.die = true

  }



}
