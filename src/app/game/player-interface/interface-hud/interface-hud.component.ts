import { Component, OnInit } from '@angular/core';
import { PlayerSerivce } from '../../player/player.service';

@Component({
  selector: 'player-interface-hud',
  templateUrl: './interface-hud.component.html',
  styleUrls: ['./interface-hud.component.scss']
})
export class InterfaceHudComponent implements OnInit {

  inventory: boolean = false
  player: any



  constructor( private playerService: PlayerSerivce ) {

  }



  ngOnInit() {

    this.playerService.currentPlayerStatus.subscribe(

      response => {
        
        this.player = response
        this.changeLife(response.health)
        this.changeMana(response.mana)

      }

    )

  }



  changeLife(health) {

    document.getElementById('healthBar').style.height = `${health}px`

  }



  changeMana(mana) {

    document.getElementById('manaBar').style.height = `${mana}px`

  }



  changeInventoryCondition() {

    this.inventory = !this.inventory

  }



}
