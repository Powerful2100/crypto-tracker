import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Td = styled.td`
    width: 25vh;
`;
const Button = styled.button`
    width: 100%;
    height: 2.75rem;
    background-color: rgb(221, 243, 255);
    border: none;
    font-size: 1.25rem;
    &:hover {
        background-color: rgb(180, 229, 255);
    }
`;

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Coin({ coin }) {

    const getPriceChange = () => {
        let color = coin.price_change_percentage_24h < 0 ? "red" : "green";
        return <span style={{ color: color }}>{Math.round(coin.price_change_percentage_24h * 10) / 10}%</span>
    }

    return (
        <tr>
            <Td>#{coin.market_cap_rank}</Td>
            <Td>
                <img src={coin.image} alt="Coin Logo" width={30} height={30} />
                {coin.name}
            </Td>
            <Td>{coin.symbol.toUpperCase()}</Td>
            <Td>${numberWithCommas(coin.current_price)}</Td>
            <Td>{getPriceChange()}</Td>
            <Td>${numberWithCommas(coin.total_volume)}</Td>
            <Td>${numberWithCommas(coin.market_cap)}</Td>
        </tr>
    )
}


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
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    last_updated: "2022-06-29T09:03:07.901Z"
    low_24h: 19954.04
    market_cap: 381640406122
    market_cap_change_24h: -20997937295.76996
    market_cap_change_percentage_24h: -5.21509
    market_cap_rank: 1
    max_supply: 21000000
    name: "Bitcoin"
    price_change_24h: -1117.7485701187616
    price_change_percentage_24h: -5.29226
    roi: null
    symbol: "btc"
    total_supply: 21000000
    total_volume: 19500971627
 */
