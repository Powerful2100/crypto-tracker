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
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  //we get the ticker from coin.jsx
  handleRefresh(valueChangedTicker) {
    //we desctructure coinData to get only ticker and than compatre that ticker to ticker that is imported from child (refreshed coin)
    const newCoinsData = this.state.coinData.map(function( {ticker, name, price} ) {
      let newPrice = price; //price from arguments
      if(valueChangedTicker === ticker) {
        //we manipulate the price
        const randomPercentage = 0.995 + Math.random() * 0.01;
          newPrice = (newPrice * randomPercentage).toFixed(2);

      }
      return { //returns to newCoin
        ticker, //is the same as ticker: ticker --> but because they match we can write just ticker, same for name
        name,
        price: newPrice
      }
    }); 

    this.setState({ coinData: newCoinsData })
  }

  render() {
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>
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
