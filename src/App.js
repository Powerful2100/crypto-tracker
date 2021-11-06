import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header';
import styled from 'styled-components';
/*
This imports are handeled by BABLE JS - similarly to React.React transformation.
That imports are also transformed to some other js language construct that makes it possible
to import React from pacage (inside node_modules)
*/
const Div = styled.div`
  text-align: center;
  background-color: rgb(221, 243, 255);
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          key: uuidv4(),
          name: "Bitcoin",
          ticker: "BTC",
          price: 63000.99
        },
        {
          key: uuidv4(),
          name: "Ethereum",
          ticker: "ETH",
          price: 4600.99
        },
        {
          key: uuidv4(),
          name: "Binance Coin",
          ticker: "BNB",
          price: 550.99
        },
        {
          key: uuidv4(),
          name: "Solana",
          ticker: "SOL",
          price: 240.99
        }
      ]
    }
  }


  render() {
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} />
        {
          /*
          We can also pass arrays. 
          We are passing state down as props - propagating the state - state changes on top levele - sub compnents get rerendered.
          Now the state of the main app goes down 2 levels - App-->CoinList-->Coin
          Now it is also easier to look at this App component.
          */
        }
      </Div>
    );
  }
}


/* 

*/


export default App;
