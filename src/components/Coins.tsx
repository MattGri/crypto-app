import React from 'react';
import CoinItem from './CoinItem';
import '../styles/Coins.scss';
import { Link } from 'react-router-dom';

interface Props {
  coins: {
    image: string;
    symbol: string;
    market_cap_rank: number;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    id: string;
  }[];
}

const Coins = ({ coins }: Props) => {
  return (
    <div className="container">
      <div>
        <div className="header">
          <p>#</p>
          <p className="coinName">Coins</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hideMobile">Volume</p>
          <p className="hideMobile">Mkt Cap</p>
        </div>

        {coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
