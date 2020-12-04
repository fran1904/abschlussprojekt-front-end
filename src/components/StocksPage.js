import React, { Component } from "react";
import { TickerSymbols, renderTickerSymbol } from "../ticker-data";
import Autocomplete from "react-autocomplete";
import Plot from "react-plotly.js";
import "../StocksPage.css";
import AverageDownCalc from './AverageDownCalc'

class StocksPage extends Component {
  state = {
    tickerValue: "",
    initialLoadOver: false,
    xAxisVals: [],
    yAxisVals: []
  };

  handleSearchClick = () => {
    const apiKey = "Y1Z7M6JFIT5LUFLB";
    let locStockTicker = this.state.tickerValue;
    const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${locStockTicker}&outputsize=compact&apikey=${apiKey}`;
    let xAxisValsArray = [];
    let yAxisValsArray = [];

    fetch(URL)
      .then((responseData) => responseData.json())
      .then((responseData) => {
        for (var key in responseData["Time Series (Daily)"]) {
          xAxisValsArray.push(key);
          yAxisValsArray.push(
            responseData["Time Series (Daily)"][key]["1. open"]
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
    const apiKey = 'Y1Z7M6JFIT5LUFLB'
    let locStockTicker = "AMZN"
    const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${locStockTicker}&outputsize=compact&apikey=${apiKey}`
    let xAxisValsArray = []
    let yAxisValsArray = []

    fetch(URL)
      .then(responseData => responseData.json())
      .then((responseData) => {
        for (var key in responseData['Time Series (Daily)']) {
          xAxisValsArray.push(key);
          yAxisValsArray.push(responseData['Time Series (Daily)'][key]['1. open'])
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
      <div className="TickerInput">

        <header className="stocks-header">
          <h2 className="headline">Stocks</h2>
          <div className="autocomplete-wrapper">
            <Autocomplete
              value={this.state.tickerValue}
              items={TickerSymbols()}
              getItemValue={(item) => item.title}
              shouldItemRender={renderTickerSymbol}
              renderMenu={(item) => <div className="dropdown">{item}</div>}
              renderItem={(item, isHighlighted) => (
                <div className={`item ${isHighlighted ? "selected-item" : ""}`}>
                  {item.title}
                </div>
              )}
              onChange={(event, tickerValue) => this.setState({ tickerValue })}
              onSelect={(tickerValue) => this.setState({ tickerValue })}
            />
           
           <img className="search-icon" onClick={this.handleSearchClick} src="/search-icon.svg" alt="search" />
          </div>
        </header>
        <main className="stocks-main">
          <p className="byline">With all of the tools available in today's market</p>
          <h2 className="stocks-displayed-firm">{this.state.initialLoadOver ? this.state.tickerValue : 'AMZN'}</h2>
    
          <div className="graph">
          <Plot
            data={[
              {
                x: this.state.xAxisVals,
                y: this.state.yAxisVals,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
              },
            ]}
            layout={{
              title: "Timeframe: Daily",
              width: 1100,
              height: 700
            }}
          />
          </div>
        </main>


        <AverageDownCalc />

      </div>
    );
  }
}

export default StocksPage;
