import {createTag} from './helpers.mjs';

const cardColors = ["hearts", "diamonds", "clubs", "spades"]
const cardTypes = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]

const cards = cardTypes.map((card) => {
    return cardColors.map((color) => {
        return color + card
    })
}).flat()

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

    window.addEventListener("mouseup", (e) => {
        move = false
    })
})


const dragAndDropCard = () => {

}
// napisac funcje jesli ktos upusci karte poza swoją kupką/ poza swoimi kartami
// to ma wrocic na swoje miejsce (twierdzenie pitagorasa?)
