import React from 'react';
import logo from "./logo.svg";
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';
/*
This imports are handeled by BABLE JS - similarly to React.React transformation.
That imports are also transformed to some other js language construct that makes it possible
to import React from pacage (inside node_modules)
*/

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img 
          src={logo}
          alt="React Logo"
          className="App-logo"
        />
        <h1 className="App-title">Coin Exchange</h1>
      </header>

      <AccountBalance amount={10000}/>

      <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={62000}/>
          <Coin name="Ethereum" ticker="ETH" price={4600}/>
          <Coin name="Solana" ticker="SOL" price={240}/>
        </tbody>
      </table>

    </div>
  );
}


/* 

*/


export default App;
