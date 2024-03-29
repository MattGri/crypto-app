import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/Coin.scss';
import DOMPurify from 'dompurify';

interface ICoin {
  name: string;
  description: {
    en: string;
  };
  market_cap_rank: number;
  image: {
    small: string;
  };
  symbol: string;
  market_data: {
    circulating_supply: string;
    market_cap: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    price_change_percentage_1y_in_currency: {
      usd: number;
    };
    price_change_percentage_30d_in_currency: {
      usd: number;
    };
    price_change_percentage_14d_in_currency: {
      usd: number;
    };
    price_change_percentage_7d_in_currency: {
      usd: number;
    };
    price_change_percentage_24h_in_currency: {
      usd: number;
    };
    price_change_percentage_1h_in_currency: {
      usd: number;
    };
    current_price: {
      usd: number;
    };
  };
}

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({} as ICoin);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.coinId]);

  return (
    <div>
      <div className="coinContainer">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rankBtn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coinHeading">
              <img src={coin.image?.small} alt={coin.name} />
              <p>{coin.name}</p>
              <p>{coin.symbol?.toUpperCase()}/USD</p>
            </div>
            <div className="coinPrice">
              <h1>${coin.market_data?.current_price.usd.toFixed(2)}</h1>
            </div>
          </div>
        </div>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_7d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_14d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_30d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_1y_in_currency.usd.toFixed(
                    1
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                <p>${coin.market_data?.low_24h.usd.toFixed(1)}</p>
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                <p>${coin.market_data?.high_24h.usd.toFixed(1)}</p>
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                <p>${coin.market_data?.market_cap.usd.toFixed(1)}</p>
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                <p>{coin.market_data?.circulating_supply}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coin.description?.en),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
