import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './Components/LoginSignup/LoginSignup.css' ;
import './Components/CurrConverter/CurrencyConverterr.css' ;
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

