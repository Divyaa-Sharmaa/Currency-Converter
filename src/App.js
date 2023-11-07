import React from 'react';
import {Routes,Route} from 'react-router-dom';

import './Components/LoginSignup/LoginSignup.css' ;
import './Components/CurrConverter/CurrencyConverterr.css' ;
import './App.css';

import {LoginSignup} from './Components/LoginSignup/LoginSignup'
import {CurrencyConverterr} from './Components/CurrConverter/CurrencyConverterr'
import { CC_History } from './Components/History/CC_History';


function App () {
  return (<>
  <Routes>
    <Route path='/' element = {<LoginSignup/>}/>
    <Route path='/CurrencyConverterr' element={<CurrencyConverterr/>}/>
    <Route path='/CC_History' element={<CC_History/>}/>
  </Routes>
  
   </>
  )
}

export default App;
