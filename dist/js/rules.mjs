import { gameState, getActivePlayer, getActivePlayerIdx, functionalCards } from "./state.mjs";

const isEndGame = () => {
    const activePlayer = getActivePlayer()
    if (activePlayer.cards) {
        return false
    }

    return true
}
 
const getCardColor = (card) => {
    return card.split("_")[0]
}

export const getCardFigure = (card) => card.split("_")[1]

const checkColor = (topCard, movedCard) => {
   return topCard.split("_")[0] === movedCard.split("_")[0]
}

const checkFigure = (topCard, movedCard) => {
    return topCard.split("_")[1] === movedCard.split("_")[1]
}

export const getCardName = (card) => card.classList[1]

const checkIfCardIsFunctional = (card) => functionalCards.contains( card.split("_")[1])

const resetRound = () => {
    gameState.round = {
        takenCard: false,
        cards: []
    }
}

export const isJack = () => {
    console.log(gameState.round)
    return getCardFigure(gameState.round.cards[0]) === "jack"
}

export const canTossCard = () => !gameState.round.takenCard

export const canTakeCard = () => gameState.round.cards.length === 0

const takeCard = () => gameState.rount.takenCard = true

export const addCardToRound = (card) => {
    gameState.round.cards.push(card)
}

export const removeCardsFromRound = () => {
    gameState.round.cards = []
}

export const canTossCardInRow = (card) => {
    console.log(card)
    if (gameState.round.cards.length === 0) {
        const topCard = gameState.visibleCards[gameState.visibleCards.length-1]
        console.log(checkColor(topCard, card) || checkFigure(topCard, card))
        return checkColor(topCard, card) || checkFigure(topCard, card)
    }
    
    const lastCard = gameState.round.cards[gameState.round.cards.length - 1]
    console.log(checkFigure(lastCard, card))
    console.log(gameState.round.cards)
    return checkFigure(lastCard, card)
}

// napisać fn czy cards jest puste, czy zawiera 3-4 elementy, i sprawdzić to, jeśli warunek spełniony to player moze kliknąć next
// napisać cofnij, i reset