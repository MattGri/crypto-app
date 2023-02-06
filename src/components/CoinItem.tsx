import React from 'react';
import '../styles/Coins.scss';

interface CoinItemProps {
  coins: {
    image: string;
    symbol: string;
    market_cap_rank: number;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
  };
}

const CoinItem = ({ coins }: CoinItemProps) => {
  return (
    <div className="coinRow">
      <p>{coins.market_cap_rank}</p>
      <div className="imgSymbol">
        <img src={coins.image} alt="" />
        <p>{coins.symbol.toUpperCase()}</p>
      </div>
      <p>${coins.current_price.toFixed(2)}</p>
      <p>{coins.price_change_percentage_24h}%</p>
      <p className="hideMobile">${coins.total_volume.toFixed(2)}</p>
      <p className="hideMobile">${coins.market_cap.toFixed(2)}</p>
    </div>
  );
};

export default CoinItem;
