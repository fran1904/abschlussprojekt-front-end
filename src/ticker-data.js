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
            "title": "INCY",
            "name": "Incyte Corp."
        },
        {   
            "id": "10",
            "title": "ILMN",
            "name": "Illumina Corp."
        },
        {   
            "id": "11",
            "title": "IR",
            "name": "Ingersoll Corp."
        },
        {   
            "id": "12",
            "title": "IBM",
            "name": "International Business MAchines"
        },
        {   
            "id": "13",
            "title": "INFO",
            "name": "IHS Markit"
        },
        {   
            "id": "14",
            "title": "ICE",
            "name": "Intercontinental"
        }

    ]
        
}

export function renderTickerSymbol(state, tickerValue) {
    return (
        state.title.toLowerCase().indexOf(tickerValue.toLowerCase()) !== -1
    );
}