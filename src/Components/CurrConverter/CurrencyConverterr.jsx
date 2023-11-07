import React, { useEffect, useState } from 'react';
import './CurrencyConverterr.css';
import { useNavigate } from 'react-router-dom';

export function CurrencyConverterr() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRates, setExchangeRates]= useState({});
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then((response) => response.json())
    .then((data) => {
        setExchangeRates(data.rates);
  })
  .catch((error) =>{
    console.error('Error fetching  exchange rates: ',error);
  });
},[]);

  const convertCurrency = () => {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    if (fromRate && toRate){
        const convertedAmount = (amount/fromRate)* toRate;
        setResult(convertedAmount.toFixed(2));
    }
  };
  function handleClick() {
    navigate("/CC_History");
  }

  return (<div className='currContainer'>
    <div className='currComponent'>
      <div>
      <div className='text'>Currency Converter</div>
      <div className='underline'></div></div>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter number"
        />
        <select className='scroll'
          value={fromCurrency}
          placeholder='fromCurrency'
          onChange={(e) => setFromCurrency(e.target.value)}
          
        >
            {Object.keys(exchangeRates).map((currency)=>(
                <option key={currency} value={currency}>{currency}</option>
            ))}
          
        </select>
        <span>to</span>
        <select className='scroll'
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          placeholder='ToCurrency'
        >
            {Object.keys(exchangeRates).map((currency)=>(
                <option key={currency} value={currency}>{currency}</option>
                ))}
          
        </select>
        <button className='converter' onClick={convertCurrency}>Convert</button>
        <button className='converter' onClick={handleClick}>History</button>
      </div>
      {result && (
        <p>
          {amount} {fromCurrency} is equal to {result} {toCurrency}
        </p>
      )}
    </div></div>
  );
}

// export default CurrencyConverter;
