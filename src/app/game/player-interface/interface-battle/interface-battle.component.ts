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
  canAttack: boolean = true


  constructor( private playerService: PlayerSerivce,
               private enemyService: EnemyService ) {

    this.player = this.playerService.getPlayer()

  }



  ngOnInit() {

    document.getElementById('enemyHealthBar').style.height = `${this.enemy.health}px`
    document.getElementById('enemyManaBar').style.height = `${this.enemy.mana}px`

  }



  attack(target, playerAnimation, weaponAnimation?, skillDamage?) {

    this.canAttack = false

    document.getElementById('diceWrapper').style.display = "block"

    setTimeout( () => {

      this.diceNumberVisibility = true
      this.rollDice(1, 20)

      setTimeout( () => {

        this.makeAttack(target, playerAnimation, weaponAnimation, skillDamage)
        document.getElementById('diceWrapper').style.display = "none"

      }, 1800)

    }, 2000)

  }



  makeAttack(target, playerAnimation, weaponAnimation?, skillDamage?) {
    
    if(target == this.enemy) {

      document.getElementById('player').classList.add(playerAnimation)
      document.getElementById('enemy').classList.add('enemy-recieve-basic-attack')
      if(this.player.weapon.image) { document.getElementById('playerWeapon').classList.add(weaponAnimation) }

      setTimeout( ()=> {

        if(this.diceResult == 1) {

          alert('bruh')

        }
        else if(this.diceResult >= 2 && this.diceResult <= 5) {

          if(skillDamage) {

            this.damagePlayer = skillDamage - 10

          }
          else {
          
            this.damagePlayer = this.player.damage - 10

          }

        }
        else if(this.diceResult >= 5 && this.diceResult <= 10) {

          if(skillDamage) {

            this.damagePlayer = skillDamage - 6

          }
          else {
          
            this.damagePlayer = this.player.damage -6

          }

        }
        else if(this.diceResult >= 10 && this.diceResult <= 15) {

          if(skillDamage) {

            this.damagePlayer = skillDamage - 2

          }
          else {
          
            this.damagePlayer = this.player.damage - 2

          }

        }
        else if(this.diceResult >= 15 && this.diceResult <= 19) {

          if(skillDamage) {

            this.damagePlayer = skillDamage

          }
          else {
          
            this.damagePlayer = this.player.damage

          }

        }
        else if(this.diceResult == 20){

          if(skillDamage) {

            this.damagePlayer = skillDamage + 10

          }
          else {
          
            this.damagePlayer = this.player.damage + 10

          }

        }

        this.enemyService.takeDamage(this.enemy.id, this.damagePlayer)

        if(target.health <= 0) {

          this.finishBattle('victory')
          this.enemyService.die(this.enemy.id)

        }
        else {

          setTimeout( () => {

            this.attack( this.playerService.getPlayer(), 'enemy-basic-attack' )

            document.getElementById('player').classList.remove(playerAnimation)
            document.getElementById('enemy').classList.remove('enemy-recieve-basic-attack')
            if(this.player.weapon.image) { document.getElementById('playerWeapon').classList.remove(weaponAnimation) }

          }, 1000)

          document.getElementById('enemyHealthBar').style.height = `${this.enemy.health}px`
          document.getElementById('enemyManaBar').style.height = `${this.enemy.mana}px`

        }

      }, 1200)

    }
    else {

      document.getElementById('player').classList.add('player-recieve-basic-attack')
      document.getElementById('enemy').classList.add(playerAnimation)

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
          document.getElementById('enemy').classList.remove(playerAnimation)

          this.canAttack = true

        }, 1000)

      }, 1200)

    }

    this.attackSkills = false
    this.diceNumberVisibility = false

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
