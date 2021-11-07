import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: rgb(221, 243, 255);
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 20000,
      showBalance: false,
      coinData: [
        {
          key: uuidv4(),
          name: "Bitcoin",
          ticker: "BTC",
          balance: 0.25,
          price: 63000.99
        },
        {
          key: uuidv4(),
          name: "Ethereum",
          ticker: "ETH",
          balance: 2,

          price: 4600.99
        },
        {
          key: uuidv4(),
          name: "Binance Coin",
          ticker: "BNB",
          balance: 1,
          price: 550.99
        },
        {
          key: uuidv4(),
          name: "Solana",
          ticker: "SOL",
          balance: 1.25,
          price: 240.99
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.toggleBalance = this.toggleBalance.bind(this);
  }


  handleRefresh(valueChangedTicker) {
    const newCoinsData = this.state.coinData.map(function( {ticker, name, price, balance} ) {
      let newPrice = price;
      if(valueChangedTicker === ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
          newPrice = (newPrice * randomPercentage).toFixed(2);
      }
      return {
        ticker,
        name,
        balance,
        price: newPrice
      }
    }); 
    this.setState({ coinData: newCoinsData });
  }

  toggleBalance() {
    let newShowBalance = this.state.showBalance ? false : true;
    this.setState({ showBalance: newShowBalance });
  }

  render() {
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} toggleBalance={this.toggleBalance}/>
        <CoinList coinData={this.state.coinData} showBalance={this.state.showBalance} handleRefresh={this.handleRefresh}/>
      </Div>
    );
  }
}

export default App;
