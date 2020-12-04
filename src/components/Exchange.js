import React, { Component } from 'react';
import '../Exchange.css'

class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: "",
            input1: "",
            input2: "",
            AmountInCurrency1: "1",
            EurRateCurrency2: "1",
            changeDirection: false,
            lastinput: "",
            data2:""

        }
    }
    componentDidMount() {
        fetch("http://data.fixer.io/api/latest?access_key=f55714fc68544efcf79c477eded056a2")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        data: result
                    },
                    () =>  fetch(`http://data.fixer.io/api/symbols?access_key=f55714fc68544efcf79c477eded056a2`)
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        this.setState(
                            {
                                data2: result,
                                isLoaded: true
                            }
                        )   
                    })
                    )
                })
    }
    handleSelect = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            this.handleCalc(this.state.lastInput)
        });
        // } (event) => this.calc(event));
    }
   
    handleInput = (event) => {
        // let input = event.target.name; // input1 oder input2
        this.setState({ 
            [event.target.name]: event.target.value,
            lastInput: event.target.name
        }, () => {
            if (event.target.name === "input1") {
                this.handleCalc('input1')
            } else if (event.target.name === "input2") {
                this.handleCalc('input2')
            }
        });
    }
    handleCalc = (para) => {
        if (para === "input1") {
            this.setState({ input2: (((1 / this.state.AmountInCurrency1) * this.state.EurRateCurrency2) * this.state.input1).toFixed(4) });
        } else if (para === "input2") {
            this.setState({ input1: (((1 / this.state.EurRateCurrency2) * this.state.AmountInCurrency1) * this.state.input2).toFixed(4) });
        }
    }
    render() {
        return (
            <section id="exchange-section">
            
                <section id="converter">
                    {this.state.isLoaded ?
                     <div className="currencies">
                        <h2 class="label_currency">Convert from: {this.state.baseCurrency}</h2>
                        <select name="AmountInCurrency1" id="" onChange={this.handleSelect} class="drop-menu">
                            <option value="1">EUR</option>
                            {Object.keys(this.state.data.rates).map((ele, key) => <option value={this.state.data.rates[ele]} key={key}>{ele}</option>)}
                        </select>
                        <h2 class="label_currency">Convert to: {this.state.finalCurrency}</h2>
                        <select name="EurRateCurrency2" id="" onChange={this.handleSelect} class="drop-menu">
                            <option value="1">EUR</option>
                            {Object.keys(this.state.data.rates).map((ele, key) => <option value={this.state.data.rates[ele]} key={key}>{ele}</option>)}
                        </select>
                    </div>
                    : "Loading"}



                        <h2>Amount you wish to convert:</h2>
                <input type="number" name="input1" value={this.state.input1} onChange={this.handleInput} />
                <input type="number" name="input2" value={this.state.input2} onChange={this.handleInput} />
                </section>
            </section>
        );
    }
}

export default Exchange;