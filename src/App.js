import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
//import { v4 as uuidv4 } from 'uuid'; 
import Header from './components/Header/Header';
import styled from 'styled-components';
import axios from "axios";

const Div = styled.div`
  text-align: center;
  background-color: rgb(221, 243, 255);
`;

const COIN_COUNT = 5;
const formatPrice = (price) => Number((price).toFixed(2));

class App extends React.Component {
  state = {
    balance: 20000,
    showBalance: true,
    coinData: []
  }

  //LIFECYCLE METHODS:
  componentDidMount = async() => {
    try{
      //Get tokens:
      const response = await axios.get("https://api.coinpaprika.com/v1/coins");
      const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
      //Retrieve the prices:
      const tickerUrl = "https://api.coinpaprika.com/v1/tickers/";
      const promises = coinIds.map(id => axios.get(tickerUrl + id));
      const coinData = await Promise.all(promises) //--> Array of promises
      const coinPriceData = coinData.map(response => {
        const coin = response.data;
        return {
          key: coin.id,
          name: coin.name,
          ticker: coin.symbol,
          balance: 0,
          price: formatPrice(coin.quotes["USD"].price)
        }
      });
      //Renders - updates state
      this.setState({ coinData: coinPriceData }); //--> In this line table is rendered!!!
    }catch(err){
      alert(err);
    }
  }


  handleRefresh = async(coinId) => {
    const coin = await axios.get(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
    const newCoinData = this.state.coinData.map((values) => {
      let newValues = { ...values };
      if (coinId === values.key) {
          newValues.price = formatPrice(coin.data.quotes.USD.price);
      }
      return newValues;
    });
    this.setState({ coinData: newCoinData });
  }

  toggleBalance = () => {
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
