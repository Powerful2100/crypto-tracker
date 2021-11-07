import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Section = styled.section`
    margin-top: 4rem;
    font-size: 2rem;
    text-align: center;
`;
const Strong = styled.strong`
    margin-right: 2rem;
`;
const Button = styled.button`
    background-color: rgb(221, 243, 255);
    border: none;
    border-radius: 20px;
    padding: 0.75rem;
    font-size: 1.65rem;
    &:hover {
        background-color: rgb(180, 229, 255);
    }
`;


export default class AccountBalance extends Component {
    render() {
        const buttonText = this.props.showBalance ? "Hide Balances" : "Show Balances"
        const renderBalance = this.props.showBalance ? <span><Strong>Account Balance:</Strong><span>{this.props.amount}€</span></span> : null;

        return (
            <Section>
                {renderBalance}
                <br/>
                <Button onClick={this.props.toggleBalance}>{buttonText}</Button>
            </Section>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}