import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';


//Instead of Styled Components we can imprt css file - however we want!
const Td = styled.td`
    border: 1px solid grey;
    width: 25vh;
`;
const Button = styled.button`
    width: 100%;
    height: 2.75rem;
    border: 2px solid grey;
    border-radius: 10px;
    background-color: rgb(180, 229, 255);
    font-size: 1.25rem;
`;
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
                price: (oldState.price * randomPercentage).toFixed(2)
            }
        });
        /**
         * There is a problem:
         *      - this state is not synchronized with main state (state in App.js)
         */
    }

    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>{this.state.price}€</Td>
                <Td>
                    <form action="#" method="POST">
                        <Button onClick={this.handleClick}>Refresh</Button>
                    </form>
                </Td>
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
