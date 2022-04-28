import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {

  const [usd, setUSD] = useState();
  const [eur, setEUR] = useState();
  const [rub, setRUB] = useState();
  const [gbp, setGBP] = useState(); 
 fetch('https://api.exchangerate-api.com/v4/latest/UAH')
    .then(response => {return response.json()})
    .then(response => {
      // console.log(response);
      setUSD(response.rates.USD);
      setEUR(response.rates.EUR);
      setRUB(response.rates.RUB);
      setGBP(response.rates.GBP);
    })

    return (
  <div className="App">
    <Header eur={eur} usd={usd}/>
    <Body eur={eur} usd={usd} rub={rub} gbp={gbp}></Body>
    <Footer/>
    </div>
  );
}

export default App;
