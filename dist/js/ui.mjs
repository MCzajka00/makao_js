import {createTag} from './helpers.mjs';
import {nextPlayer} from './state.mjs';

const generateCard = (cardName) => {

    return createTag({
        tagName: "div",
        className: ["card", cardName]
    })
}

//  config to obiekt z listy players

const createPlayer = (config, idx) => {
    const playerUi = createTag({
        tagName: "div",
        className: ["player", `player${idx}`, config.active ? "active" : "not-active"]
    })
    console.log(config)
    const playerNameTag = createTag({
        tagName: "span",
        className: "name",
        text: config.name
    })

    const playerCardsTag = createTag({
        tagName: "div",
        className: "cards"
    })

    config.cards.forEach((card) => {
        const cardTag = generateCard(card)
        playerCardsTag.appendChild(cardTag)
    })

    playerUi.appendChild(playerNameTag)

    if (config.active){
        const buttonTag = createTag({
            tagName: "button",
            className: "btn-next-player",
            text: "Next Player",
            evts: [{
                type: "click",
                cb: nextPlayer
            }]
        })
        playerUi.appendChild(buttonTag)
    }

    playerUi.appendChild(playerCardsTag)

    return playerUi
}

const createTable = (hiddenCards, visibleCards) => {
    const tableTag = createTag({
        tagName: "div",
        className: "center"
    })

    const visibleCardsTag = createTag({
        tagName: "div",
        className: "game"
    })

    visibleCards.forEach((card) => {
        const cardTag = generateCard(card)
        visibleCardsTag.appendChild(cardTag)
    })

    tableTag.appendChild(visibleCardsTag)

    const hiddenCardsTag = createTag({
        tagName: "div",
        className: "restOfCards"
    })

    hiddenCards.forEach((card) => {
        const cardTag = generateCard(card)
        hiddenCardsTag.appendChild(cardTag)
    })

    tableTag.appendChild(hiddenCardsTag)

    return tableTag
}

export const createMainTable = (state) => {
    const tableBoardTag = createTag({
        tagName: "section",
        className: "tableBoard"
    })

    const mainTableTag = createTag({
        tagName: "div",
        className: "mainTable"
    })

    tableBoardTag.appendChild(mainTableTag)

    state.players.forEach((player, idx) => {
        const playerHTML = createPlayer(player, ++idx)
        mainTableTag.appendChild(playerHTML)
    })
    
    const tableHTML = createTable(state.hiddenCards, state.visibleCards)

    mainTableTag.appendChild(tableHTML)

    return tableBoardTag
}

export const setCards = (idx) => {
    const playerContainer = document.querySelector(`.player${idx}`);
    const cardsToSet = playerContainer.querySelectorAll(".card")
    const playerContainerLeft = playerContainer.offsetLeft;
    const playerContainerTop = playerContainer.offsetTop;
    let cardIdx = 0;
    cardsToSet.forEach((card) => 
    {
        card.style.left = playerContainerLeft + cardIdx * 15 + 'px';
        card.style.top = playerContainerTop + 30 + 'px';
        card.startLeft = card.style.left;
        card.startTop = card.style.top;
        cardIdx++;
    })
    // console.log(cardsToSet)
}


// state to gameState z pliku state.mjs