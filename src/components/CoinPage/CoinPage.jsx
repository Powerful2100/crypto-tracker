import React from "react";
import styled from "styled-components";

const Box = styled.div`
  text-align: left;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 6vh;
  margin-bottom: 6vh;
`;

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinPage = ({ coin }) => {

  const getPriceChange = () => {
    let color = coin.price_change_percentage_24h < 0 ? "red" : "green";
    return <span style={{ color: color }}>{Math.round(coin.price_change_percentage_24h * 10) / 10}%</span>
  }

  return(
    <Box>
      <div>
        <img src={coin.image} width={125} height={125} alt={coin.name}/>
        <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
      </div>
      <div>
        <h2>${numberWithCommas(coin.current_price)} {getPriceChange()}</h2>
      </div>
    </Box>
  )
}

export default CoinPage;

/**
 * EXAMPLE RESPONSE -btc
  * ath: 69045
    ath_change_percentage: -71.03041
    ath_date: "2021-11-10T14:24:11.849Z"
    atl: 67.81
    atl_change_percentage: 29397.53968
    atl_date: "2013-07-06T00:00:00.000Z"
    circulating_supply: 19080125
    current_price: 20003
    fully_diluted_valuation: 420041720301
    high_24h: 21195
    id: "bitcoin"
--    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    last_updated: "2022-06-29T09:03:07.901Z"
    low_24h: 19954.04
    market_cap: 381640406122
    market_cap_change_24h: -20997937295.76996
    market_cap_change_percentage_24h: -5.21509
    market_cap_rank: 1
    max_supply: 21000000
--    name: "Bitcoin"
    price_change_24h: -1117.7485701187616
    price_change_percentage_24h: -5.29226
    roi: null
--   symbol: "btc"
    total_supply: 21000000
    total_volume: 19500971627
 */
