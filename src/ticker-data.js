export function TickerSymbols() {
    return [
        {   
            "id": "1",
            "title": "AAPL",
            "name": "Apple Inc"
        },
        {   
            "id": "2",
            "title": "GOOG",
            "name": "Alphabet Inc Class A"
        },
        {   
            "id": "3",
            "title": "FB",
            "name": "Facebook Inc."
        },
        {   
            "id": "4",
            "title": "NFLX",
            "name": "Netflix Inc."
        },
        {   
            "id": "5",
            "title": "AMZN",
            "name": "Amazon.com Inc."
        },
        {   
            "id": "6",
            "title": "TX",
            "name": "Ternium SA"
        },
        {   
            "id": "7",
            "title": "BRK.B",
            "name": "Berkshire"
        },
        {   
            "id": "8",
            "title": "INTC",
            "name": "Intel Corporation"
        },
        {   
            "id": "9",
            "title": "GAZ",
            "name": "Gazprom"
        }

    ]
        
}

export function renderTickerSymbol(state, tickerValue) {
    return (
        state.title.toLowerCase().indexOf(tickerValue.toLowerCase()) !== -1
    );
}