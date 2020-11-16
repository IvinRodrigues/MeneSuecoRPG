import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlayerSerivce } from '../player/player.service';
import { player } from './../player/player'
import { spadita } from './spadita/spadita'

@Injectable({

  providedIn: 'root'
  
})

export class ItensService {



    constructor( private playerService: PlayerSerivce ) { }



    findItem(id) {

        if(id == 'spadita') {

            return spadita

        }
        else if(id == 'itemGenerico') {

            

        }

    }



    addItemInventory(id) {

        player.inventory.push(this.findItem(id))

        this.playerService.updatePlayer()

    }



    itemInteraction(item, role) {

        if(role == 'weapon') {
        
            if(player.weapon == item) {

                player.weapon.equipped = false
                player.weapon = {}

            }
            else {

                player.weapon = item
                item.equipped = true

            }

        }
        else if(role == 'helmet') {
        
            player.helmet = item

        }
        else if(role == 'boot') {
        
            player.helmet = item

        }
        else {

            player.armor = item

        }

    }



}
