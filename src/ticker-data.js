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
        }
    ]
        
}

export function renderTickerSymbol(state, tickerValue) {
    return (
        state.title.toLowerCase().indexOf(tickerValue.toLowerCase()) !== -1
    );
}