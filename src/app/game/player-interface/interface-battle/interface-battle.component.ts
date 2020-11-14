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
  attackSkills: boolean = false
  player: any
  diceResult: number
  diceNumberVisibility: boolean = false
  damagePlayer: number = 0
  damageEnemy: number = 0


  constructor( private playerService: PlayerSerivce,
               private enemyService: EnemyService ) {

    this.player = this.playerService.getPlayer()

  }



  ngOnInit() {

    document.getElementById('enemyHealthBar').style.height = `${this.enemy.health}px`
    document.getElementById('enemyManaBar').style.height = `${this.enemy.mana}px`

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

          this.damagePlayer = this.player.damage - 10

        }
        else if(this.diceResult >= 5 && this.diceResult <= 10) {

          this.damagePlayer = this.player.damage -6

        }
        else if(this.diceResult >= 10 && this.diceResult <= 15) {

          this.damagePlayer = this.player.damage - 2

        }
        else if(this.diceResult >= 15 && this.diceResult <= 19) {

          this.damagePlayer = this.player.damage

        }
        else if(this.diceResult == 20){

          this.damagePlayer = this.player.damage + 10

        }

        this.enemyService.takeDamage(this.enemy.id, this.damagePlayer)

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

          document.getElementById('enemyHealthBar').style.height = `${this.enemy.health}px`
          document.getElementById('enemyManaBar').style.height = `${this.enemy.mana}px`

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

          this.damageEnemy = this.enemy.damage - 10

        }
        else if(this.diceResult >= 5 && this.diceResult <= 10) {

          this.damageEnemy = this.enemy.damage - 6

        }
        else if(this.diceResult >= 10 && this.diceResult <= 15) {

          this.damageEnemy = this.enemy.damage - 2

        }
        else if(this.diceResult >= 15 && this.diceResult <= 19) {

          this.damageEnemy = this.enemy.damage

        }
        else if(this.diceResult == 20) {

          this.damageEnemy = this.enemy.damage + 10

        }

        this.playerService.takeDamage(this.damageEnemy)

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
    this.attackSkills = false

    this.damageEnemy = 0
    this.damagePlayer = 0

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
