import React, { Component } from "react";
import { TickerSymbols, renderTickerSymbol } from "./Stock1";
import Autocomplete from "react-autocomplete";
import Plot from "react-plotly.js";

import "./CryptoStyle.css";
class Stock extends Component {
  state = {
    tickerValue: "",
    initialLoadOver: false,
    xAxisVals: [],
    yAxisVals: []
  };
  handleSearchClick = () => {
    const API_KEY = "Y1Z7M6JFIT5LUFLB";
    let StockSymbol = this.state.tickerValue;
    const URL = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${StockSymbol}&&market=CNY&apikey=${API_KEY}`;
    let xAxisValsArray = [];
    let yAxisValsArray = [];
    fetch(URL)
      .then((responseData) => responseData.json())
      .then((responseData) => {
        for (var key in responseData["Time Series (Digital Currency Daily)"]) {
          xAxisValsArray.push(key);
          yAxisValsArray.push(
            responseData["Time Series (Digital Currency Daily)"][key]["1b. open (USD)"]
          );
        }

        this.setState({
          initialLoadOver: true,
          xAxisVals: xAxisValsArray,
          yAxisVals: yAxisValsArray,
        });
      });
  };
  // Fetch AMZN Onload
  componentDidMount(){
    const API_KEY = 'Y1Z7M6JFIT5LUFLB'
    let StockSymbol = "BTC"
    const URL = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${StockSymbol}&&market=CNY&apikey=${API_KEY}`
    let xAxisValsArray = []
    let yAxisValsArray = []
    fetch(URL)
      .then(responseData => responseData.json())
      .then((responseData) => {
        for (var key in responseData['Time Series (Digital Currency Daily)']) {
          xAxisValsArray.push(key);
          yAxisValsArray.push(responseData['Time Series (Digital Currency Daily)'][key]['1b. open (USD)'])
          }
          this.setState({
            xAxisVals: xAxisValsArray,
            yAxisVals: yAxisValsArray
          });
        }
      )
  }
  // End Fetch AMZN Onload
  render() {
    return (
      <div id="TickerInput">
        <header id="stocks-header">
          <div id="stock-crypto">
          <h2 id="headline">Crypto</h2>
          <p>A cryptocurrency (or crypto currency) is a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership.</p>
          </div>
          <div id="autocomplete-wrapper">
            <Autocomplete
              value={this.state.tickerValue}
              items={TickerSymbols()}
              getItemValue={(item) => item.title}
              shouldItemRender={renderTickerSymbol}
              renderMenu={(item) => <div id="dropdown">{item}</div>}
              renderItem={(item, isHighlighted) => (
                <div className={`item ${isHighlighted ? "selected-item" : ""}`}>
                  {item.title}
                </div>
              )}
              onChange={(event, tickerValue) => this.setState({ tickerValue })}
              onSelect={(tickerValue) => this.setState({ tickerValue })}
            />
           
           <img id="search-icon" onClick={this.handleSearchClick} src="/search-icon.svg" alt="search" />
          </div>
        </header>
        <main id="stocks-main">
          {/* <p id="byline">With all of the tools available in today's market</p> */}
          <h2 id="stocks-displayed-firm">{this.state.initialLoadOver ? this.state.tickerValue : 'BTC'}</h2>
          {/* <h2 id="stocks-displayed-firm">{this.state.tickerValue}</h2> */}
          <div id="graph1">
          <Plot
            data={[
              {
                x: this.state.xAxisVals,
                y: this.state.yAxisVals,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "006699" },
              },
            ]}
            layout={{
              title: "Timeframe: Daily",
              width: 1200,
              height: 800
            }}
          />
          </div>
          {/* <div id="graph2">
          <Plot
            data={[
              {
                x: this.state.xAxisVals,
                y: this.state.yAxisVals,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "blue" },
              },
            ]}
            layout={{
              title: "Timeframe: Daily",
              width: 1000,
              height: 700
            }}
          />
          </div>
          <div id="graph3">
          <Plot
            data={[
              {
                x: this.state.xAxisVals,
                y: this.state.yAxisVals,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "blue" },
              },
            ]}
            layout={{
              title: "Timeframe: Daily",
              width: 850,
              height: 700
            }}
          />
          
          </div>
          <div id="graph4">
          <Plot
            data={[
              {
                x: this.state.xAxisVals,
                y: this.state.yAxisVals,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "blue" },
              },
            ]}
            layout={{
              title: "Timeframe: Daily",
              width: 750,
              height: 600
            }}
          />
          
          </div>
          <div id="graph5">
          <Plot
            data={[
              {
                x: this.state.xAxisVals,
                y: this.state.yAxisVals,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "blue" },
              },
            ]}
            layout={{
              title: "Timeframe: Daily",
              width: 650,
              height: 500
            }}
          />
          
          </div>
          <div id="graph6">
          <Plot
            data={[
              {
                x: this.state.xAxisVals,
                y: this.state.yAxisVals,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "blue" },
              },
            ]}
            layout={{
              title: "Timeframe: Daily",
              width: 490,
              height: 400
            }}
          />
          
          </div> */}
          
        </main>
      </div>
      
    );
  }
}
export default Stock;




// // import React from 'react';
// import Autocomplete from 'react-autocomplete';
// import Plot from 'react-plotly.js';
// import { TickerSymbols, renderTickerSymbol } from "./Stock1";
// import React, { Component } from 'react';
// class Stock extends Component {
 
//     state = {
//       tickerValue: "",
//       // initialLoadOver: false,
//       stockChartXValues: [],
//       stockChartYValues: []
//     };


//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
      
//   //   }
  

//   // componentDidMount() {
//   //   this.fetchStock();
//   // }

//   fetchStock = () => {
//     const pointerToThis = this;
//     console.log(pointerToThis);
//     const API_KEY = '8Q1LX8CXTL5285BU';
//     let StockSymbol = 'ETH';
//     // let StockSymbol =this.state.tickerValue;
//     // console.log(this.state.tickerValue);
//     let API_Call = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${StockSymbol}&&market=CNY&apikey=${API_KEY}`;
//     let stockChartXValuesFunction = [];
//     let stockChartYValuesFunction = [];
//     // https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=demo
//     fetch(API_Call)
//       .then(
//         function(response) {
//           return response.json();
//         }
//       )
//       .then(
//         function(data) {
//           console.log(data);

//           for (var key in data['Time Series (Digital Currency Daily)']) {
//             stockChartXValuesFunction.push(key);
//             stockChartYValuesFunction.push(data['Time Series (Digital Currency Daily)'][key]['1b. open (USD)']);
//           }

          
//           pointerToThis.setState({
//             stockChartXValues: stockChartXValuesFunction,
//             stockChartYValues: stockChartYValuesFunction
//           });
//         }
//       )
//   }

//   render() {
//     return (
//       <div className="TickerInput">
//         <header className="stocks-header">
//           <h2 className="headline">Stocks</h2>
//           <div className="autocomplete-wrapper">
//             <Autocomplete
//               value={this.state.tickerValue}
//               items={TickerSymbols()}
//               getItemValue={(item) => item.title}
//               shouldItemRender={renderTickerSymbol}
//               renderMenu={(item) => <div className="dropdown">{item}</div>}
//               renderItem={(item, isHighlighted) => (
//                 <div className={`item ${isHighlighted ? "selected-item" : ""}`}>
//                   {item.title}
//                 </div>
//               )}
//               onChange={(event, tickerValue) => this.setState({ tickerValue })}
//               onSelect={(tickerValue) => this.setState({ tickerValue })}
//             />
           
//            <img className="search-icon" onClick={this.fetchStock} src="/search-icon.svg" alt="search" />
//           </div>
//         </header>
//         <main className="stocks-main">
//           <p className="byline"></p>
//           <h2 className="stocks-displayed-firm">{this.state.initialLoadOver ? this.state.tickerValue : 'BTC'}</h2>
          
//           <div className="graph">
//           <Plot
//             data={[
//               {
//                 x: this.state.stockChartXValues,
//               y: this.state.stockChartYValues,
//                 type: "scatter",
//                 mode: "lines+markers",
//                 marker: { color: "red" },
//               },
//             ]}
//             layout={{
//               title: "Timeframe: Daily",
//               width: 1200,
//               height: 800
//             }}
//           />
//           </div>
//         </main>
//       </div>
//     );
//   }
// }

// export default Stock;






















// import React from 'react';
// import Plot from 'react-plotly.js';

// class Stock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stockChartXValues: [],
//       stockChartYValues: []
//     }
//   }

//   componentDidMount() {
//     this.fetchStock();
//   }

//   fetchStock() {
//     const pointerToThis = this;
//     console.log(pointerToThis);
//     const API_KEY = '8Q1LX8CXTL5285BU';
//     let StockSymbol = 'ETH';
//     let API_Call = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${StockSymbol}&&market=CNY&apikey=${API_KEY}`;
//     let stockChartXValuesFunction = [];
//     let stockChartYValuesFunction = [];
//     // https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=demo
//     fetch(API_Call)
//       .then(
//         function(response) {
//           return response.json();
//         }
//       )
//       .then(
//         function(data) {
//           console.log(data);

//           for (var key in data['Time Series (Digital Currency Daily)']) {
//             stockChartXValuesFunction.push(key);
//             stockChartYValuesFunction.push(data['Time Series (Digital Currency Daily)'][key]['1b. open (USD)']);
//           }

          
//           pointerToThis.setState({
//             stockChartXValues: stockChartXValuesFunction,
//             stockChartYValues: stockChartYValuesFunction
//           });
//         }
//       )
//   }

//   render() {
//     return (
//       <div>
//         <h1>Crypto</h1>
    
//         <Plot
//           data={[
//             {
//               x: this.state.stockChartXValues,
//               y: this.state.stockChartYValues,
//               type: 'scatter',
//               mode: 'lines+markers',
//               marker: {color: 'blue'},
              
//             }
//           ]}
//           layout={{width: 1200, height: 640, title: 'A Fancy Plot'}}
//         />
//       </div>
//     )
//   }
// }

// export default Stock;



