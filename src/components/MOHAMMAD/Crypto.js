import React from "react"
import './CryptoStyle.css';

const Crypto = ({
    Image,
    Name,
    Price,
    Chang24H,
    doller,
    prozent
}) => {
    return ( 
<main id="crypto-container">
    <table className="crypto-table">
       <tr>
            <td className="name-img">
              <img src={Image} alt=""/>
              <p id="name"> {Name}</p>
            </td>
            <td className="doller">
              <p id="price"> {doller}   {Price}</p>
            </td>
            <td>
                {Chang24H < 0 ? (
              <p className='red'>{Chang24H}  {prozent}</p>
                ) : (
              <p className='green'>{Chang24H}  {prozent}</p>
                  )}
            </td>
        </tr>
  </table>
</main>

     );
}
 
export default Crypto;