import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { player } from './player'

@Injectable({

  providedIn: 'root'
  
})

export class PlayerSerivce {

    public playerStatus = new BehaviorSubject(player)
    currentPlayerStatus = this.playerStatus.asObservable()



    constructor() { }



    getPlayer() {

        return player

    }



    takeDamage(damage) {

        player.health = player.health - damage

        this.playerStatus.next(player)

    }



}
