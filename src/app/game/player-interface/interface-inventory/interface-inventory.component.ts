import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'player-interface-inventory',
  templateUrl: './interface-inventory.component.html',
  styleUrls: ['./interface-inventory.component.scss']
})
export class InterfaceInventoryComponent implements OnInit {


  @Output() closeInventoryEvent: EventEmitter<boolean> = new EventEmitter()

  

  constructor() { }



  ngOnInit() {
  }


  closeInventory() {

    this.closeInventoryEvent.emit(true)

  }

}
