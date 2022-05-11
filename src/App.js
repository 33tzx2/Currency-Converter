import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {

  const [currency, setCurrency] = useState({'usd':'', 'eur':'', 'rub':'', 'gbp':''});
  fetch('https://api.exchangerate-api.com/v4/latest/UAH')
    .then(response => {return response.json()})
    .then(response => {
      // console.log(response);
      setCurrency({'usd': response.rates.USD, 'eur': response.rates.EUR, 'rub': response.rates.RUB, 'gbp': response.rates.GBP});
    })
  
  console.log('CURR', currency);

    return (
  <div className="App">
    <Header currency={currency}/>
    <Body currency={currency}></Body>
    <Footer/>
    </div>
  );
}

export default App;
