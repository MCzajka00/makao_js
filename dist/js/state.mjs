export const gameState = {
    players: [
        {
            active: true,
            name: "Rafał",
            cards: ["spades5", "clubs4", "hearts3", "heartsqueen", "diamondsace"]
        },
        {
            active: false,
            name: "Ewa",
            cards: ["spades5", "clubs4", "hearts3", "heartsqueen", "diamondsace"]
        },
        {
            active: false,
            name: "Magda",
            cards: ["spades5", "clubs4", "hearts3", "heartsqueen", "diamondsace"]
        },
        {
            active: false,
            name: "Ola",
            cards: ["diamonds5", "spades4", "hearts8", "heartsqueen", "diamondsace"]
        }
    ],

    hiddenCards: ["hearts3"],
    visibleCards: ["clubs8", "clubs9"]

}

// model aplikacji, to bedzie uzupełniane zanim zaczniemy grę