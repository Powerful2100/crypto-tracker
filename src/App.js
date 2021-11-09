import React, {useState, useEffect} from 'react';
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
const formatPrice = (price) => Number((price).toFixed(3));

function App(props) {
  /*state = {
    balance: 20000,
    showBalance: true,
    coinData: []
  }
  Re-written to ˇˇ HOOKS
  
    A lot of people also use this:
      const [state, setState] = useState({
        balance: 1000,
        showBalance: true,
        coinData: []
      })
      setState({balance: 11200}); This would just rewrite the whole object
    

    BEST NOTATION:
        [name, function to change it] = React.useState(inital value)
  const [balance, setBalance] = React.useState(20000);*/
  const [balance, setBalance] = useState(20000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]); //--> empty array



  //LIFECYCLE METHODS:
  const componentDidMount = async() => {
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
      //this.setState({ coinData: coinPriceData }); //--> In this line table is rendered!!!
      setCoinData(coinPriceData);
    }catch(err){
      alert(err);
    }
  }

  //Is called each time the componentDidMount or componentDidUpdate would be called!!
  useEffect(() => {
    if(coinData.length == 0){
      //COMPONENT DID MOUNT
      componentDidMount(); //--> useEffect can't be async function thats why we needed to have it in seperated function
    }else{
      //COMPONENT DID UPDATE
    }
  });




  const handleRefresh = async(coinId) => {
    const coin = await axios.get(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
    const newCoinData = coinData.map((values) => {
      let newValues = { ...values };
      if (coinId === values.key) {
          newValues.price = formatPrice(coin.data.quotes.USD.price);
      }
      return newValues;
    });
    //this.setState({ coinData: newCoinData });
    setCoinData(newCoinData)
  }

  const toggleBalance = () => {
    //let newShowBalance = this.state.showBalance ? false : true;
    //this.setState({ showBalance: newShowBalance });
    setShowBalance(oldValue => !oldValue);
  }


  return (
    <Div>
      <Header />
      <AccountBalance amount={balance} showBalance={showBalance} toggleBalance={toggleBalance}/>
      <CoinList coinData={coinData} showBalance={showBalance} handleRefresh={handleRefresh}/>
    </Div>
  );
}

export default App;
