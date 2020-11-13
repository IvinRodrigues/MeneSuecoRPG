import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnemyService } from '../../enemys/enemy.service';
import { PlayerSerivce } from '../../player/player.service';

@Component({
  selector: 'player-interface-battle',
  templateUrl: './interface-battle.component.html',
  styleUrls: ['./interface-battle.component.scss']
})
export class InterfaceBattleComponent implements OnInit {

  @Input() enemy: any
  @Output() battleResult: EventEmitter<boolean> = new EventEmitter()
  player: any
  d20Result: number


  constructor( private playerService: PlayerSerivce,
               private enemyService: EnemyService ) {

    this.player = this.playerService.getPlayer()

  }



  ngOnInit() { }



  attack() {

    this.makeAttack(this.enemy)

  }



  makeAttack(target) {

    this.rollD20(1, 20)

    if(target == this.enemy) {

      if(this.d20Result == 1) {

        alert('bruh')

      }
      else if(this.d20Result >= 2 && this.d20Result <= 5) {

        this.enemyService.takeDamage(this.enemy.id ,this.player.damage)

      }
      else if(this.d20Result >= 5 && this.d20Result <= 10) {

        this.enemyService.takeDamage(this.enemy.id ,this.player.damage)

      }
      else if(this.d20Result >= 10 && this.d20Result <= 15) {

        this.enemyService.takeDamage(this.enemy.id ,this.player.damage)

      }
      else if(this.d20Result >= 15 && this.d20Result <= 19) {

        this.enemyService.takeDamage(this.enemy.id ,this.player.damage)

      }
      else {

        alert('ultimate')

      }

      if(target.health <= 0) {

        this.finishBattle('victory')
        this.enemyService.die(this.enemy.id)

      }
      else {

        this.makeAttack( this.playerService.getPlayer() )

      }

    }
    else {

      if(this.d20Result == 1) {

        alert('bruh')

      }
      else if(this.d20Result >= 2 && this.d20Result <= 5) {

        this.playerService.takeDamage(this.enemy.damage)

      }
      else if(this.d20Result >= 5 && this.d20Result <= 10) {

        this.playerService.takeDamage(this.enemy.damage)

      }
      else if(this.d20Result >= 10 && this.d20Result <= 15) {

        this.playerService.takeDamage(this.enemy.damage)

      }
      else if(this.d20Result >= 15 && this.d20Result <= 19) {

        this.playerService.takeDamage(this.enemy.damage)

      }
      else {

        alert('ultimate')

      }

      if(target.health <= 0) {

        this.finishBattle('defeat')

      }

    }

  }



  run() {

    this.finishBattle('run')

  }



  rollD20(min, max) {

    this.d20Result = Math.floor(Math.random() * (max - min) + min)

  }



  finishBattle(result) {

    this.battleResult.emit(result)

  }



}
