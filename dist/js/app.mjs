import { createMainTable } from './ui.mjs';
import { gameState } from './state.mjs';

const cardColors = ["hearts", "diamonds", "clubs", "spades"]
const cardTypes = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]

const cards = cardTypes.map((card) => {
    return cardColors.map((color) => {
        return color + card
    })
}).flat()

document.body.appendChild(createMainTable(gameState))

// console.log(cards)

const divTag = document.createElement("div")

cards.forEach((card) => {
    const cardTag = document.createElement("div")
    cardTag.classList.add("card")
    cardTag.classList.add(card)


    divTag.appendChild(cardTag)
})


// document.body.appendChild(divTag)

let indexCounter = 100

const cardsHTML = document.querySelectorAll(".card")
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
        }
    })
})


