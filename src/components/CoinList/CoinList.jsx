import React, { Component } from 'react';
import Coin from "../Coin/Coin";
import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default class CoinList extends Component {
    render() {
        return (
            <Table>
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
                  //Now that we changed it to its own file we coinData is stored in props!
                this.props.coinData.map( ({name, ticker, price}) => 
  
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
          </Table>
        )
    }
}
