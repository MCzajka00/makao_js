import {createTag} from './helpers.mjs';

const cardColors = ["hearts", "diamonds", "clubs", "spades"]
const cardTypes = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]

const cards = cardTypes.map((card) => {
    return cardColors.map((color) => {
        return color + card
    })
}).flat()

console.log(cards)

const divTag = document.createElement("div")

cards.forEach((card) => {
    const cardTag = document.createElement("div")
    cardTag.classList.add("card")
    cardTag.classList.add(card)


    divTag.appendChild(cardTag)
})


document.body.appendChild(divTag)




const inputTag = createTag({
tagName: "input",
className: ["dupa", "dupa2"],
id: "yolo",
attrs: [{
    name: "text",
    value: "hello!"
},
{
    name: "placeholder",
    value: "yyy"
}],
evts: [{
    type: "click",
    cb: (evt) => {
        console.log("it works")
    }
}]
})

document.body.appendChild(inputTag)