

import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Crypto from './Crypto';
import './CryptoStyle.css';

const CryptoTable = () => {
    const [coins, setCoins] = useState([]);
    const doller="USD"
    const prozent="%"
    useEffect(() => {
        Axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'
          )
          .then(res => {
            setCoins(res.data);
            console.log(res.data);
          })
    
    })
    return ( 
        <main id="CryptoTable">
            <table id="crypto-table">
             <tr className="out-map">
                    <td className="CryptoTable-name">NAME</td>
                    <td className="CryptoTable-price">PRICE</td>
                    <td className="CryptoTable-change">CHANGE(24h)</td>
                </tr>
                </table>

            {coins.map(key => {
                return(
        <Crypto 
                   Image={key.image}
                   Name={key.name}
                   Price={key.current_price}
                  
                   Chang24H={key.price_change_percentage_24h}
                   kay={key.id}
                   doller={doller}
                   prozent={prozent}
                   
        
        />)

            })}

        </main>
        

     );
}
 
export default CryptoTable;



