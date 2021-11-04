import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
//Importing StyledComponets ^^

//Can be named anything but we need to use same name in component!
const Section = styled.section`
    margin-top: 4rem;
    font-size: 2rem;
    text-align: center;
`;
const Strong = styled.strong`
    margin-right: 2rem;
`;


export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
                <Strong>Account Balance:</Strong>{this.props.amount}€
            </Section>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}