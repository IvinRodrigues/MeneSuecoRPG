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
  diceResult: number
  diceNumberVisibility: boolean = false


  constructor( private playerService: PlayerSerivce,
               private enemyService: EnemyService ) {

    this.player = this.playerService.getPlayer()

  }



  ngOnInit() {

  }



  attack(target) {

    document.getElementById('diceWrapper').style.display = "block"

    setTimeout( () => {

      this.diceNumberVisibility = true
      this.rollDice(1, 20)

      setTimeout( () => {

        this.makeAttack(target)
        document.getElementById('diceWrapper').style.display = "none"

      }, 2000)

    }, 2000)

  }



  makeAttack(target) {

    if(target == this.enemy) {

      document.getElementById('player').classList.add('player-basic-attack')
      document.getElementById('enemy').classList.add('enemy-recieve-basic-attack')

      setTimeout( ()=> {

        if(this.diceResult == 1) {

          alert('bruh')

        }
        else if(this.diceResult >= 2 && this.diceResult <= 5) {

          this.enemyService.takeDamage(this.enemy.id ,this.player.damage)

        }
        else if(this.diceResult >= 5 && this.diceResult <= 10) {

          this.enemyService.takeDamage(this.enemy.id ,this.player.damage)

        }
        else if(this.diceResult >= 10 && this.diceResult <= 15) {

          this.enemyService.takeDamage(this.enemy.id ,this.player.damage)

        }
        else if(this.diceResult >= 15 && this.diceResult <= 19) {

          this.enemyService.takeDamage(this.enemy.id ,this.player.damage)

        }
        else{

          alert('ultimate')

        }

        if(target.health <= 0) {

          this.finishBattle('victory')
          this.enemyService.die(this.enemy.id)

        }
        else {

          setTimeout( () => {

            this.attack( this.playerService.getPlayer() )

            document.getElementById('player').classList.remove('player-basic-attack')
            document.getElementById('enemy').classList.remove('enemy-recieve-basic-attack')

          }, 1000)

        }

      }, 1200)

    }
    else {

      document.getElementById('player').classList.add('player-recieve-basic-attack')
      document.getElementById('enemy').classList.add('enemy-basic-attack')

      setTimeout( ()=> {

        if(this.diceResult == 1) {

          alert('bruh')

        }
        else if(this.diceResult >= 2 && this.diceResult <= 5) {

          this.playerService.takeDamage(this.enemy.damage)

        }
        else if(this.diceResult >= 5 && this.diceResult <= 10) {

          this.playerService.takeDamage(this.enemy.damage)

        }
        else if(this.diceResult >= 10 && this.diceResult <= 15) {

          this.playerService.takeDamage(this.enemy.damage)

        }
        else if(this.diceResult >= 15 && this.diceResult <= 19) {

          this.playerService.takeDamage(this.enemy.damage)

        }
        else {

          alert('ultimate')

        }

        if(target.health <= 0) {

          this.finishBattle('defeat')

        }

        setTimeout( () => {

          document.getElementById('player').classList.remove('player-recieve-basic-attack')
          document.getElementById('enemy').classList.remove('enemy-basic-attack')

        }, 1000)

    }, 1200)

    }

    this.diceNumberVisibility = false

  }



  run() {

    this.finishBattle('run')

  }



  rollDice(min, max) {

    this.diceResult = Math.floor(Math.random() * (max - min) + min)

  }



  finishBattle(result) {

    this.battleResult.emit(result)

  }



}
