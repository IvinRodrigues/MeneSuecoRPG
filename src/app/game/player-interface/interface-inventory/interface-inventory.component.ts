import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItensService } from '../../itens/itens.service';
import { PlayerSerivce } from '../../player/player.service';

@Component({
  selector: 'player-interface-inventory',
  templateUrl: './interface-inventory.component.html',
  styleUrls: ['./interface-inventory.component.scss']
})
export class InterfaceInventoryComponent implements OnInit {


  @Output() closeInventoryEvent: EventEmitter<boolean> = new EventEmitter()

  inventory: any
  player: any
  itemPreview: any = null

  filter: string = 'helmet'

  

  constructor( private playerService: PlayerSerivce,
               private itensService: ItensService ) {

    this.playerService.currentPlayerStatus.subscribe(

      response => { this.player = response, this.inventory = response.inventory }

    )

  }



  ngOnInit() {



  }



  itemInteraction(item) {

    this.itensService.itemInteraction(item, item.role)

  }



  closeInventory() {

    this.closeInventoryEvent.emit(true)

  }



  changeFilter(filter) {

    this.filter = filter

    console.log(this.player)

  }



  itemPreviewInteraction(item) {

    this.itemPreview = item

  }

}
