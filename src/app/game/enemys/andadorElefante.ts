export let andadorElefente: any = {

    id: 'andadorElefante',
    name: 'Andador de Elefante',
    health: 100,
    damage: 5,
    dialog: 'to andando de elefante, ta olhando o que seu paspalho?',
    answers: [
      { answer: 'desculpa, pode andar', reaction: 'neutral' },
      { answer: 'para de andar e da uma cavalgadinha aqui no pai kkkk', reaction: 'fight' },
    ],
    fightResult: { victory: 'da uma pegadita aqui na tromba do pai kkkk', defeat: 'morri', run: 'kkk bundão' },
    defeated: { status: false, answer: 'ja morri caraio' }

  }