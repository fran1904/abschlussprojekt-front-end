


export function TickerSymbols() {
    return [
        {   
            "id": "1",
            "title": "BTC",
            "name": "Bitcoin"
        },
        {   
            "id": "2",
            "title": "XRP",
            "name": "Ripple"
        },
        {   
            "id": "3",
            "title": "ETH",
            "name": "Ethereum"
        },
        {   
            "id": "4",
            "title": "LTC",
            "name": "Litecoin"
        },
        {   
            "id": "5",
            "title": "BCH",
            "name": "Bitcoin Cash"
        }
    ]
        
  }
  export function renderTickerSymbol(state, tickerValue) {
    return (
        state.title.toLowerCase().indexOf(tickerValue.toLowerCase()) !== -1
    );
  }
  