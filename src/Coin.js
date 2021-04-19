import React from 'react';
import './Coin.css';


const Coin = ({
  name,
  price,
  marketcap,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h2>{name}</h2>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>Current price:- ${price}</p>
          <p className='coin-percent'>Price Change % : {priceChange.toFixed(2)}%</p>
          <p className='coin-marketcap'>
            Market Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;