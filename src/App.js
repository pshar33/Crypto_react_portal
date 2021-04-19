import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Coin from './Coin';


function App() {
  const [coins, setCoins] = useState([]);
 

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []); 



  return (
    <div className="App">
      <h1>Inecta crypto portal</h1>
      {coins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            marketcap={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
