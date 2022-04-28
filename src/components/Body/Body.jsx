import React from 'react'
import Row from 'react-bootstrap/Row';
import CurrencyConverter from './CurrencyConverter';
import './Body.css'

const Body = ({eur, usd, rub, gbp}) => {
  
  return (
<div className='bodyWrapper'>
  <Row xs={1} md={2} className="g-4">
  <div className='ratesToUAH'>
    <h5>Exchange rate to UAH now:</h5>
    <ul >
    <li>EUR: {(1 / eur).toFixed(2)}</li>
    <li>USD: {(1 / usd).toFixed(2)}</li>
    <li>RUR: {(1 / rub).toFixed(2)}</li>
    <li>GBP: {(1 / gbp).toFixed(2)}</li>
    </ul>
  </div> 
  <CurrencyConverter/>
  
  </Row>
</div>
  )
}

export default Body