import React, { Component } from 'react';
import Coin from "../Coin/Coin";
import styled from 'styled-components';

const Table = styled.table`
  margin: 30px auto 50px auto;
  border-collapse: collapse;
  display: inline-block;
  font-size: 1.4rem;
`;
const H1 = styled.h1`
  margin-top: 50px;
`;
const Th = styled.th`
border: 1px solid grey;
`;

export default function CoinList(props) {
  return (
    <>
    <H1>Top 5 Cryptocurrencies by Market Cap:</H1>
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Ticker</Th>
          <Th>Price</Th>
          {props.showBalance ? <Th>Balances</Th> : null}
          <Th>Refresh</Th>
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.map( ({name, ticker, price, balance, key}) => 
            <Coin 
              key={key}
              tickerId={key}
              handleRefresh={props.handleRefresh}
              name={name}
              ticker={ticker}
              balance={balance}
              showBalance={props.showBalance}
              price={price}
            />
          )
        }
      </tbody>
    </Table>
    </>
  )
}
