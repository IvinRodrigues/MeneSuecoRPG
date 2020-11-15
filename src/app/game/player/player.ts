export let player: any = {

    name: 'Player Default',
    health: 100,
    mana: 100,
    damage: 15,
    weapon:{ 
        
        item: 'Spadita', equipped: true, skills: [

        { name: 'Cutucadita', description: 'Da uma cutucadita', damage: 50, classAnimation: 'spadita-cutucadita', classPlayerAnimation: 'player-basic-attack' },
        { name: 'Bate e volta', description: 'Lança e espada', damage: 80, classAnimation: 'spadita-bate-volta', classPlayerAnimation: 'player-spadita-bate-volta' },
        { name: 'Na cabecinha', description: 'Pula e dá uma bem no meio do coco', damage: 99, classAnimation: 'spadita-cabecita', classPlayerAnimation: 'player-spadita-cabecita' }

    ]},
    helmet: {},
    boots: {},
    armor: {},
    inventory: [

        { item: 'Spadita', equipped: true, skills: [

            { name: 'Cutucadita', description: 'Da uma cutucadita', damage: 20 },
            { name: 'Bate e volta', description: 'Lança e espada', damage: 25 },
            { name: 'Na cabecinha', description: 'Pula e dá uma bem no meio do coco', damage: 35 }

        ]}

    ]

}