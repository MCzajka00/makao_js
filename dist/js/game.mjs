import { createMainTable, setCards } from './ui.mjs';
import { gameState } from './state.mjs';

const cardColors = ["hearts", "diamonds", "clubs", "spades"]
const cardTypes = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]

const cards = cardTypes.map((card) => {
    return cardColors.map((color) => {
        return color + card
    })
}).flat()


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

            if (!inBounds) {   
                card.style.left = card.startLeft
                card.style.top = card.startTop
            } else {
                card.style.left = left + 10 + "px"
                card.style.top = top + 10 + "px"
                // cardsHTML.remove(card)
                // centerDiv.appendChild(card)
            }

        // cardsHTML.remove(card)
        // centerDiv.appendChild(card)
        })

    })

    for (let idx = 1; idx <= 4; idx++){
        setCards(idx)
    }
}

// 1. player ma sie zmieniac zgodnie z kierunkiem ruchu wskazówek zegara
// 2. karta którą położymy na srodku ma tam zostać jak zmieniamy playera tzn musimy
// zmienic to tak, ze jak polozymy to znika ona z playera i pojawia sie
// na srodku