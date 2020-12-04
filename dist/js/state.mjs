import { reload, remove, cards } from './game.mjs'
import { removeCardsFromRound, canTakeCard, isJack } from "./rules.mjs"
import { modalColor } from "./ui.mjs"



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
    visibleCards: [],
    round: {
        takenCard: false,
        cards: []
    },

    condition: false,
    rules: []
//TODO zreimplementowac modal zeby byl generowany na podstawie state + modal do figur + jeden rule do kart funkcyjnych
}

export const functionalCards = ["2", "3", "4", "jack", "king", "ace"]

export const getActivePlayer = () => gameState.players.filter((e) => e.active)[0]
export const getActivePlayerIdx = () => gameState.players.indexOf(getActivePlayer())


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

    gameState.visibleCards.push(shuffleCard())

    const deckLen = cards.length

    for (let i = 0; i < deckLen; i++){
        gameState.hiddenCards.push(shuffleCard())
    }
}

export const getCard = () => {
    if (getActivePlayer().current){
        const lastCard = gameState.hiddenCards.pop()
        getActivePlayer().cards.push(lastCard)

        reload()
    }
}


export const nextPlayer = () => {
    const roundLen = gameState.round.cards.length
    if (roundLen === 0 || roundLen === 1 || roundLen ===3 || roundLen === 4){

        if (isJack()) {
            document.body.appendChild(modalColor())
        }
        // const len = gameState.players.length
        // const activePlayer = getActivePlayer()
        // const idx = getActivePlayerIdx()
        // gameState.round.cards.forEach((card) => playCard(card))
    
        // const nextIdx = (idx + 1) % len

        // activePlayer.active = false
        // gameState.players[nextIdx].active = true
    
        removeCardsFromRound()
        reload()
    } else {
        undoCards()
    }
}

export const undoCards = () => {
    
    gameState.round.cards.forEach((card) => removeCardsFromRound(card))
    reload()
}

const removeCard = (idxOfPlayer, idxOfCard) => gameState.players[idxOfPlayer].cards.splice(idxOfCard, 1)
const addCardToGame = (cardName) => {
    gameState.visibleCards.push(cardName)
}

export const checkCard = (card) => {

    const cardProperties = card.classList[1].split("_")
    const visibleCardsProperties = gameState.visibleCards[gameState.visibleCards.length-1].split("_")
    
    return cardProperties[0] == visibleCardsProperties[0] || cardProperties[1] == visibleCardsProperties[1];
}

export const playCard = (chosenCard) => {

        const activePlayer = gameState.players.filter((e) => e.active)[0]
        const idxOfPlayer = gameState.players.indexOf(activePlayer)
        const idxOfCard = gameState.players[idxOfPlayer].cards.indexOf(cardName)
        removeCard(idxOfPlayer, idxOfCard)
        addCardToGame(cardName)
    }


// model aplikacji, to bedzie uzupełniane zanim zaczniemy grę