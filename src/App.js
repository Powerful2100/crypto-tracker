import React from 'react';
import logo from "./logo.svg";
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';
import { v4 as uuidv4 } from 'uuid';

/*
This imports are handeled by BABLE JS - similarly to React.React transformation.
That imports are also transformed to some other js language construct that makes it possible
to import React from pacage (inside node_modules)
*/

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
      <div className="App">
  
        <header className="App-header">
          <img 
            src={logo}
            alt="React Logo"
            className="App-logo"
          />
          <h1 className="App-title">Coin Exchange</h1>
        </header>
  
        <AccountBalance amount={this.state.balance}/>
  
        <table className="coin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

            {
              //RENDERING LISTS:
                //We map the coinData array of objects
                //for every item in coinData array function inside .map() is done
                //for every coin in array we render Coin component
                //we can desctructure value:
                  //this.state.coinData.map(value => ...) --> BEFORE
                  //this.state.coinData.map( ({name, ticker, price}) => ...) --> AFTER
              this.state.coinData.map( ({name, ticker, price}) => 

                /**
                 * Whenever we render a list we need to add a special property to it called KEY
                 * If there is no key - there is a problem - react wont know how to handle on each and every component inside the list
                 * 
                 * There are multiple options what key can be:
                 *    - in our case can be coin ticker (every unique)
                 *    - can also be made using UUID - npm package - glej uuid.txt
                 *          <Coin key={value.key} name={value.name} ticker={value.ticker} price={value.price} />      
                 * 
                 * We can also do this:
                 *  this.state.coinData.map(value => 
                 *    <Coin key={value.ticker} {...value} />  
                 *  )
                 * ...value - is a spread operator that enumerates, spreads the key value pairs in component as props.
                 *  {
                 *    name: "Bitcoin",
                 *    ticker: "BTC"
                 *  }
                 *  This would give a Coin compoenent name="Bitcoin" and ticker="BTC" properties!
                 */

                //We pass the state of main application as props - PROP DRILLING - you give the state of parent component (App) to child component (Coin)!
                //And the child component may drill further and pass the state of the original grandparent component to the cild component fo the cild component!
                //This way we can propogade (razmnožiti) state downwords in component hierchery App-->Coin-->...
                <Coin key={ticker} name={name} ticker={ticker} price={price} />
              )
            }

          </tbody>
        </table>
  
      </div>
    );
  }
}


/* 

*/


export default App;
