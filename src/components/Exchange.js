import React, { Component } from "react";

import "../Exchange.css";

class Exchange extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      rates: [],
      data: [],
      amountToConvert: "",
      baseCurrency: 1,
      finalCurrency: 1,
      data2: "",
    };
  }

  componentDidMount() {
    fetch(
      `https://data.fixer.io/api/latest?access_key=f55714fc68544efcf79c477eded056a2`
    )
      .then((res) => res.json())
      .then((result) => {

        this.setState(
          {
            data: result,
            currencies: Object.keys(result["rates"]).sort(),
            rates: Object.values(result.rates),
          },
          () =>
            fetch(
              `https://data.fixer.io/api/symbols?access_key=f55714fc68544efcf79c477eded056a2`
            )
              .then((res) => res.json())
              .then((result) => {
 
                this.setState({
                  data2: result,
                  isLoaded: true,
                });
              })
        );
      });
  }

  handleSelectBaseCurrency = (e) => {
    this.setState({
      baseCurrency: e.target.value,
    });
  };

  handleSelectFinalCurrency = (e) => {
    // let currency2 = e.target.key
    this.setState({
      finalCurrency: e.target.value,
      // currency2: e.target.key
    });
  };

  getAmount = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
        // amountToConvert: e.target.value
      },
      () => {
        if (event.target.name === "amountToConvert") {
          this.convertAmount("amountToConvert");
        } else if (event.target.name === "amountInverseToConvert") {
          this.convertAmount("amountInverseToConvert");
        }
      }
    );
  };
  convertAmount = (para) => {
    console.log(this.state.finalCurrency);

    if (para === "amountToConvert") {
      this.setState({
        amountInverseToConvert: (
          (1 / this.state.baseCurrency) *
          this.state.finalCurrency *
          this.state.amountToConvert
        ).toFixed(4),
      });
    } else if (para === "amountInverseToConvert") {
      this.setState({
        amountToConvert: (
          (1 / this.state.finalCurrency) *
          this.state.baseCurrency *
          this.state.amountInverseToConvert
        ).toFixed(4),
      });
    }
  };

  render() {
    return (
      <section id="exchange-section">
        <h2 class="exchange-h2">Currency converter</h2>
        {this.state.isLoaded ? (
          <section id="converter">
            <div className="convert">
              {/* <div className="single-currency"> */}
              <h2 class="convert_h2">Convert from:</h2>

              <select
                value={this.state.baseCurrency}
                onChange={this.handleSelectBaseCurrency}
                class="convert-drop_menu"
              >
                {/* <option key="EURO" value="1">EUR : Euro</option> */}
                {Object.keys(this.state.data.rates).map((currency, key) => (
                  <option key={key} value={this.state.data.rates[currency]}>
                    {currency} : {this.state.data2.symbols[currency]}{" "}
                  </option>
                ))}
                ;
              </select>

              <div className="convert-amount">
                <h2 class="amount_h2">Amount:</h2>
                <input
                  type="number"
                  name="amountToConvert"
                  value={this.state.amountToConvert}
                  onChange={this.getAmount}
                  className="input-amount"
                ></input>
              </div>
            </div>
            <img
              src="./arrows-blue-versetzt.png"
              alt=""
              className="convert_arrows"
            />
            <div className="convert">
              <h2 class="convert_h2">Convert to:</h2>

              <select
                value={this.state.finalCurrency}
                onChange={this.handleSelectFinalCurrency}
                class="convert-drop_menu"
              >
                {/* <option key="EUR" value="1">EUR : Euro</option> */}
                {Object.keys(this.state.data.rates).map((currency, key) => (
                  <option
                    key={key}
                    value={this.state.data.rates[currency]}
                    className="option"
                  >
                    {currency} : {this.state.data2.symbols[currency]}
                  </option>
                ))}
                ;
              </select>
              <div className="convert-amount">
                <h2 class="amount_h2">Amount:</h2>
                <input
                  type="number"
                  name="amountInverseToConvert"
                  value={this.state.amountInverseToConvert}
                  onChange={this.getAmount}
                  className="input-amount"
                />
              </div>
            </div>

            {/* </section> */}
          </section>
        ) : (
          "Loading"
        )}
      </section>
    );
  }
}

export default Exchange;
