import React, { Component } from 'react';
import '../AverageDownCalc.css'

class AverageDownCalc extends Component {
  state = {
    purchase1NumShares: "0",
    purchase1Price: "0",

    purchase2NumShares: "0",
    purchase2Price: "0",

    purchase3NumShares: "0",
    purchase3Price: "0",

    purchase4NumShares: "0",
    purchase4Price: "0",

    totalAmountBought: 0,
    totalShares: 0,
    avgPrice: 0,
  };

  handlePurchase1 = (event) => {
    this.setState({ purchase1NumShares: event.target.value });
  };
  handlePurchase2 = (event) => {
    this.setState({ purchase2NumShares: event.target.value });
  };
  handlePurchase3 = (event) => {
    this.setState({ purchase3NumShares: event.target.value });
  };
  handlePurchase4 = (event) => {
    this.setState({ purchase4NumShares: event.target.value });
  };
  storePurchase1Price = (event) => {
    this.setState({ purchase1Price: event.target.value });
  };
  storePurchase2Price = (event) => {
    this.setState({ purchase2Price: event.target.value });
  };
  storePurchase3Price = (event) => {
    this.setState({ purchase3Price: event.target.value });
  };
  storePurchase4Price = (event) => {
    this.setState({ purchase4Price: event.target.value });
  };

  handleCalcAverage = (event) => {
    this.setState(
      {
        totalAmountBought:
          parseInt(parseInt(this.state.purchase1NumShares * this.state.purchase1Price).toFixed(2)) +
          parseInt(parseInt(this.state.purchase2NumShares * this.state.purchase2Price).toFixed(2)) +
          parseInt(parseInt(this.state.purchase3NumShares * this.state.purchase3Price).toFixed(2)) +
          parseInt(parseInt(this.state.purchase4NumShares * this.state.purchase4Price).toFixed(2)),
      },
      () => {
        this.setState(
          {
            totalShares:
              parseInt(this.state.purchase1NumShares) +
              parseInt(this.state.purchase2NumShares) +
              parseInt(this.state.purchase3NumShares) +
              parseInt(this.state.purchase4NumShares),
          },
          () => {
            this.setState({
              avgPrice:
                ((this.state.totalAmountBought * 1) / this.state.totalShares) *
                1,
            });
          }
        );
      }
    );
  };

  render() {
    return (
      <div className="avg-calculator">
        <h3>Average Down Calculator</h3>

        <div className="divTable">
          <div className="divTableBody">

            <div className="divTableRow bold odd">
              <div className="divTableCell">Shares Bought</div>
              <div className="divTableCell">Purchase Price</div>
            </div>

            <div className="divTableRow even">
              <div className="divTableCell">
                <input
                  type="number"
                  id="purchase1NumShares"
                  value={this.state.purchase1NumShares}
                  onChange={this.handlePurchase1}
                />
              </div>
              <div className="divTableCell">
                <input
                  type="number"
                  id="purchase1Price"
                  value={this.state.purchase1Price}
                  onChange={this.storePurchase1Price}
                />
              </div>
            </div>

            <div className="divTableRow odd">
              <div className="divTableCell">
                <input
                  type="number"
                  id="purchase2NumShares"
                  value={this.state.purchase2NumShares}
                  onChange={this.handlePurchase2}
                />
              </div>
              <div className="divTableCell">
                <input
                  type="number"
                  id="purchase2Price"
                  value={this.state.purchase2Price}
                  onChange={this.storePurchase2Price}
                />
              </div>
            </div>

            <div className="divTableRow even">
              <div className="divTableCell">
                <input
                  type="number"
                  id="purchase3NumShares"
                  value={this.state.purchase3NumShares}
                  onChange={this.handlePurchase3}
                />
              </div>
              <div className="divTableCell">
                <input
                  type="number"
                  id="purchase3Price"
                  value={this.state.purchase3Price}
                  onChange={this.storePurchase3Price}
                />
              </div>
            </div>

            <div className="divTableRow odd">
              <div className="divTableCell">
                <input
                  type="number"
                  id="purchase4NumShares"
                  value={this.state.purchase4NumShares}
                  onChange={this.handlePurchase4}
                />
              </div>
              <div className="divTableCell">
                <input
                  type="number"
                  id="purchase4Price"
                  value={this.state.purchase4Price}
                  onChange={this.storePurchase4Price}
                />
              </div>
            </div>

            <div className="divTableRow bold">
              <div className="divTableCell">Total Shares: {this.state.totalShares}</div>
              <div className="divTableCell">Average Price: {this.state.avgPrice.toFixed(2)}</div>
            </div>
          </div>
        </div>
        <button onClick={this.handleCalcAverage}>Calculate</button>
      </div>
    );
  }
}
 
export default AverageDownCalc;