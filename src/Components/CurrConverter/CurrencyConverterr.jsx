import React, { useEffect, useState } from 'react';
import './CurrencyConverterr.css';
import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function CurrencyConverterr() {
  // const location = useLocation();
  // const name = location?.state?.name;
  const {isAuthenticated, user} = useAuth0();
  const [amount, setAmount] = useState('enter number');
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('EUR');
  // const [username, setUsername] = useState('');
  const [exchangeRates, setExchangeRates]= useState({});
  const [result, setResult] = useState(null);
  // const navigate = useNavigate();

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
        if(convertedAmount>0 && !isNaN(convertedAmount)){
          setResult(Number(convertedAmount.toFixed(2)));
        }else if(convertedAmount<0){
          setResult('Negative numbers are not allowed');
        }else{
          setResult('Please enter a valid number')
        }
       
    }
  };
  // function handleClick() {
  //   navigate("/CC_History");
  // }

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (<div className='currContainer'>
    {/* {name && <p>Welcome, {name}</p>} */}
    {
      isAuthenticated && <h1>Welcome, {user.name}</h1>
    } 
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
          onChange={handleToCurrencyChange} //{(e) => setToCurrency(e.target.value)}
          placeholder='ToCurrency'
        >
            {Object.keys(exchangeRates)
            .filter((currency) => currency !== fromCurrency)
            .map((currency)=>(
                <option key={currency} value={currency}>{currency}</option>
                ))}
          
        </select>
        <button className='converter' onClick={convertCurrency}>Convert</button>
        
      </div>
      {/* <Link className='converter' to={"/"}>back</Link> */}
      {result && typeof result === 'number'?(
        <p>
          {amount} {fromCurrency} is equal to {result} {toCurrency}
        </p>
      ): (
        <p>{result}</p>
      )
    }
    </div></div>
  );
}

// export default CurrencyConverter;
