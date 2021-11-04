import React, { Component } from 'react';
import "./Coin.css";
import PropTypes from "prop-types";

export default class Coin extends Component {
    constructor(props){
        super(props);
        //State can only be initialized once and thet is in constructor!!!
        this.state = {
            price: this.props.price + 10
        }
        this.handleClick = this.handleClick.bind(this);
    }
    /*componentDidMount() {
        const callback = () => {
            //set the state to a new random value
            const randomPercentage = 0.995 + Math.random() * 0.01;
            //DONT DO THIS: this.state.price = this.state.price * randomPercentage; !!!
            //statecant be initialize anywhere else than in a constructor !!!

            // There is a specific way to update state --> this.setState
            //inside we have an oldState
            //we describe state as function of oldState
        
            this.setState(function(oldState){
                return{
                    price: (oldState.price * randomPercentage).toFixed(3)
                }
            });
        }
        setInterval( callback, 1000 );
    }*/
    /**
     * HancleClick method recieves an event object
     */
    handleClick(event) {
        //Prevent the deafult action of submitting the form
        event.preventDefault(); //we get the event from handleClick

        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState(function(oldState){
            return{
                price: (oldState.price * randomPercentage).toFixed(3)
            }
        });
    }

    render() {
        return (
            <tr className="coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>€{this.state.price}</td>
                <td>
                    <form action="#" method="POST">
                        <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </td>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

/**
 * In object above we are setting properties given to Coin class
 * name must be string and it is required same for ticker
 * price must be number ans it is also required
 */
