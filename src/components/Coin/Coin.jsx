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
    background-color: rgb(221, 243, 255);
    border: none;
    font-size: 1.25rem;
    &:hover {
        background-color: rgb(180, 229, 255);
    }
`;
export default class Coin extends Component {
    constructor(props){
        super(props);
        //If we dont bind we dont have access to props:
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        //Prevent the deafult action of submitting the form
        event.preventDefault(); //we get the event from handleClick
        this.props.handleRefresh(this.props.ticker); // We can submit to the parent coin ticker - so with this in parent we can find a correct value
        /*const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState(function(oldState){
            return{
                price: (oldState.price * randomPercentage).toFixed(2)
            }
        });
        
         * There is a problem:
         *      - this state is not synchronized with main state (state in App.js) - on this level (Coin.jsx) price is different than on top level (App.js) - this is horrible
         */
    }

    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>{this.props.price}€</Td>
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
