import { reload, remove, cards } from './game.mjs'


export const gameState = {
    players: [
        {
            active: false,
            name: "Rafał",
            cards: []
        },
        {
            active: false,
            name: "Kinga",
            cards: []
        },
        {
            active: false,
            name: "Adam",
            cards: []
        },
        {
            current: true,
            active: true,
            name: "Ola",
            cards: []
        }
    ],

    hiddenCards: [],
    visibleCards: []

}


const shuffleCard = () => {
    const card = cards[Math.round(Math.random() * (cards.length - 1))]
    
    const idxOfCard = cards.indexOf(card)
    cards.splice(idxOfCard, 1)

    return card
}


export const shuffleCards = () => {
    gameState.players.forEach((player) => {
        for (let i = 0; i < 5; i++){
            player.cards.push(shuffleCard())
        }
    })

    for (let i = 0; i < ){
        gameState.hiddenCards.push()
    }
}

export const nextPlayer = () => {
    const len = gameState.players.length
    const activePlayer = gameState.players.filter((e) => e.active)[0]
    const idx = gameState.players.indexOf(activePlayer)

    const nextIdx = (idx + 1) % len

    activePlayer.active = false
    gameState.players[nextIdx].active = true

    reload()

}

const removeCard = (idxOfPlayer, idxOfCard) => gameState.players[idxOfPlayer].cards.splice(idxOfCard, 1)
const addCardToGame = (cardName) => {
    gameState.visibleCards.push(cardName)
    // console.log(gameState.visibleCards)
}

export const playCard = () => {
    const chosenCard = document.querySelector(".moved")

    if (chosenCard.classList.length > 1){
        const cardName = chosenCard.classList[1]
        const activePlayer = gameState.players.filter((e) => e.active)[0]
        const idxOfPlayer = gameState.players.indexOf(activePlayer)
        const idxOfCard = gameState.players[idxOfPlayer].cards.indexOf(cardName)
        removeCard(idxOfPlayer, idxOfCard)
        addCardToGame(cardName)
    }
}

// model aplikacji, to bedzie uzupełniane zanim zaczniemy grę