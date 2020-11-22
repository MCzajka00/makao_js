import { reload } from './game.mjs'

export const gameState = {
    players: [
        {
            active: false,
            name: "Rafał",
            cards: ["spades5", "clubs4", "hearts3", "heartsqueen", "diamondsace"]
        },
        {
            active: false,
            name: "Kinga",
            cards: ["spades5", "clubs4", "hearts3", "heartsqueen", "diamondsace"]
        },
        {
            active: false,
            name: "Adam",
            cards: ["spades5", "clubs4", "hearts3", "heartsqueen", "diamondsace"]
        },
        {
            active: true,
            name: "Ola",
            cards: ["diamonds5", "spades4", "hearts8", "heartsqueen", "diamondsace"]
        }
    ],

    hiddenCards: ["hearts3"],
    visibleCards: ["clubs8", "clubs9"]

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

// model aplikacji, to bedzie uzupełniane zanim zaczniemy grę