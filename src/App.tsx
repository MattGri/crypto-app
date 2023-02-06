import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import Navbar from './components/Navbar';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=10&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Coins coins={coins} />
      
    </div>
  );
}

export default App;
