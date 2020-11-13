import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { andadorElefente } from './andadorElefante'

@Injectable({

  providedIn: 'root'
  
})

export class EnemyService {

    enemy: any = null
    public enemyStatus = new BehaviorSubject(this.enemy)
    currentEnemyStatus = this.enemyStatus.asObservable()



    constructor() { }



    findEnemy(id) {

        if(id == 'andadorElefante'){

            return andadorElefente

        }

    }



    getEnemy(id) {

        this.enemyStatus.next(this.findEnemy(id))
        return this.findEnemy(id)

    }



    takeDamage(id, damage) {

        let enemyFinded = this.findEnemy(id)

        this.enemyStatus.next(enemyFinded.health = (enemyFinded.health - damage))

    }



    die(id) {

        let enemyFinded = this.findEnemy(id)
        enemyFinded.defeated.status = true
        this.enemy = null

    }



}
