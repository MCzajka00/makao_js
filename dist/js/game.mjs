import { createMainTable, setCards } from './ui.mjs';
import { gameState, playCard, shuffleCards, checkCard } from './state.mjs';
import { canTossCardInRow, getCardName, addCardToRound } from "./rules.mjs"

const cardColors = ["hearts", "diamonds", "clubs", "spades"]
const cardTypes = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]

export const cards = cardTypes.map((card) => {
    return cardColors.map((color) => {
        return color + card, color + "_" + card
    })
}).flat()
console.log(cards)


export const remove = () => {
   const game = document.querySelector(".tableBoard")

   if (game){
       game.remove()
   }
}

export const reload = () => {

    remove()


    document.body.appendChild(createMainTable(gameState))

    let indexCounter = 100

    const cardsHTML = document.querySelectorAll(".active .card")

    cardsHTML.forEach((card) => {
        let move = false
        card.startLeft = card.style.left
        card.startTop = card.style.top

        card.addEventListener("mousedown", (e) => {
            move = true
            indexCounter++
            card.style.zIndex = indexCounter
        })

        card.addEventListener("mousemove", (e) => {
            if (move == true){
                card.style.left = e.clientX - 50 + "px"
                card.style.top = e.clientY - 50 + "px"
            }
        })

        card.addEventListener("mouseup", (e) => {
            move = false
            const centerDiv = document.querySelector(".center");
            const left = centerDiv.offsetLeft;
            const top = centerDiv.offsetTop;
            const right = left + centerDiv.offsetWidth;
            const bottom = top + centerDiv.offsetHeight;
            const inBounds = e.clientX >= left && e.clientX <= right && e.clientY >= top && e.clientY <= bottom;

            const canBePlayed = checkCard(card);

            if (inBounds && canBePlayed && canTossCardInRow(getCardName(card))) {
                addCardToRound(getCardName(card))
                card.style.left = left + 10 + "px"
                card.style.top = top + 10 + "px"
                playCard(card)
            }else {
                card.style.left = card.startLeft;
                card.style.top = card.startTop;
            }
        })
    })

    for (let idx = 1; idx <= 4; idx++){
        setCards(idx)
    }
}