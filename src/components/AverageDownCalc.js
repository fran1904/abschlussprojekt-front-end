import React, { Component } from 'react';
import '../AverageDownCalc.css'

class AverageDownCalc extends Component {
    state = { 

     }

     handleCalcAverage = () => {
         return 'yo'
     }



    render() { 
        return ( 
            <div className="avg-calculator">
            <h3>Average Down Calculator</h3>
            <div className="display-flex justify-content-around">
                <p className="w-half">Shares Bought</p> <p className="w-half">Purchase Price</p>
            </div>

            {/* Input fields */}
                <div  className="display-flex justify-content-around">
                    <input className="w-half" type="number" id="purchase1NumShares"/> 
                    <input className="w-half" type="number" id="purchase1Price"/>
                </div>

                <div className="display-flex justify-content-around">
                    <input type="number" id="purchase2NumShares"/> 
                    <input type="number" id="purchase2Price"/>
                </div>

                <button onClick={this.handleCalcAverage}>Calculate</button>

            {/* Result Box */}
            <div>
                <h4 className="total-shares">Shares Bought</h4> <h4 className="avg-cost">Purchase Price</h4>
                <div>
                <p className="total-shares-res">Output_Result</p> <p className="avg-cost-res">Output_Result</p>
                </div>
            </div>
            </div>
         );
    }
}
 
export default AverageDownCalc;