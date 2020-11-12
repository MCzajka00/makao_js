import {createTag} from './helpers.mjs';

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
    const playerNameTag = createTag({
        tagName: "p",
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


// state to gameState