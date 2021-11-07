import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

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
    handleClick = (event) => {
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
    }

    render() {
        const balances = this.props.showBalance ? <Td>{this.props.balance}</Td> : null;

        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>{this.props.price}€</Td>
                {balances}
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
