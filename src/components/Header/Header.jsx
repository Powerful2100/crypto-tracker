import React, { Component } from 'react';
import logo from "./logo.svg";
import styled from 'styled-components';

const HeaderHTML = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;
const H1 = styled.h1`
    font-size: 3rem;
`;
const Img = styled.img`
    height: 5rem;
    pointer-events: none;
`;

export default class Header extends Component {
    render() {
        return (
            <HeaderHTML>
            <Img 
              src={logo}
              alt="React Logo"
            />
            <H1>Coin Exchange</H1>
          </HeaderHTML>
        )
    }
}
