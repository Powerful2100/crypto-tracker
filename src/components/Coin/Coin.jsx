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



export default function Coin(props) {
    const handleClick = (event) => {
        event.preventDefault();
        props.handleRefresh(props.tickerId);
    }
    
    const balances = props.showBalance ? <Td>{props.balance}</Td> : null;

    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>$ {props.price}</Td>
            {balances}
            <Td>
                <form action="#" method="POST">
                    <Button onClick={handleClick}>Refresh</Button>
                </form>
            </Td>
        </tr>
    )
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    tickerId: PropTypes.string.isRequired
}
