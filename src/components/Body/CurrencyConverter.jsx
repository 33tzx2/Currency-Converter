import React from 'react'
import './CurrencyConverter.css'
import $ from 'jquery';

const CurrencyConverter = () => {
  const curEl_one = document.getElementById("currency-one");
  const amountEl_one = document.getElementById("amount-one");
  const curEl_two = document.getElementById("currency-two");
  const amountEl_two = document.getElementById("amount-two");
  
  const rateEl = document.getElementById("rate");
  const swap = document.getElementById("swap");
  
  // function

    function calculate() {
    // get the select options value
    const curOneVal = curEl_one.value;
    const curTwoVal = curEl_two.value;
  
    // fetch the data of selected currencyEl_one
     fetch(`https://api.exchangerate-api.com/v4/latest/${curOneVal}`)
      .then((res) => res.json())
      .then((data) => {
        const rateTwo = data.rates[curTwoVal];
    //holder value    
        rateEl.innerText = `1 ${curOneVal} = ${rateTwo.toFixed(4)} ${curTwoVal}`;
    //swap values   
       swap.addEventListener("click", () => {
          const temp = curEl_one.value;
          curEl_one.value = curEl_two.value;
          curEl_two.value = temp;
          const val = amountEl_one.value;
          amountEl_one.value = amountEl_two.value;
          amountEl_two.value = val;
        });
    //calculate values in input 
      $(document).ready(function () {
        $(".input-money").on('input', function () {
          if ($(this).is("#amount-two")) {
            amountEl_one.value = (amountEl_two.value / rateTwo).toFixed(2);
          }
          if ($(this).is("#amount-one")) {
            amountEl_two.value = (amountEl_one.value * rateTwo).toFixed(2);
          } 
        }); 
      }); 
    });
  }

  // Function init
  $(document).ready(function () {
  calculate();  
  });
 
  return (
  
<div className='container'>
  <h5>Currency Converter:</h5>
  <div className='currency'>
    <select id="currency-one" defaultValue='USD'>
      <option value="RUB">RUB</option>
      <option value="UAH">UAH</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
    </select>
    <input type="number" id="amount-one" placeholder="0" className='input-money'/>
  </div>

  <div className='swap-rate-container'>
    <button className='btn' id="swap">
      Swap ↕️
    </button>
    <div className='rate' id="rate">--</div>
  </div>

  <div className='currency'>
    <select id="currency-two" defaultValue='EUR'>
      <option value="RUB">RUB</option>
      <option value="UAH">UAH</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
    </select>
    <input type="number" id="amount-two" placeholder="0" className='input-money'/>
  </div>
</div>  
  )
}

export default CurrencyConverter