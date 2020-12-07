import React, {useState, useEffect} from 'react';
import './CryptoStyle.css';

const countries = ['USD', 'EUR', 'JPY', 'TRY', 'CAD'];
const MoneyTable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
       
        const result = [];
        countries.forEach((item, index) => {
            fetch(`https://api.exchangeratesapi.io/latest?base=${item}`)
            .then(res => res.json()).catch(err => console.log(err))
            .then(reponse => {
                result.push(reponse);
                if(index === countries.length -1){
                    setData(result)
                }
            }).catch(err => console.log(err))
        })
    }, [])

    return(
        <div >
           <table className="exchageTable">
               {data.map((item, key) => {
                   return <thead className="class-thead" key={key}>
                   {key === 0 && <tr>
                   <td></td>
                   {Object.keys(item.rates).map((rate, index) => (
                        index < 6 && <td key={'td-1-' + index} className="strong">{rate}</td>
                    ))}
                   </tr>}
                   <tr>
                        <td className="strong">{item.base}</td>
                        {Object.keys(item.rates).map((rate, index) => (
                        index < 6 && <td key={'td-2-' + index} className="">{item.rates[rate].toFixed(2)}</td>
                    ))}
                   </tr>
                   </thead>
               })}
            </table>
        </div>
    )
}

export default MoneyTable;