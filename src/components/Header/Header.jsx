import React, { Component } from 'react';
import logo from "./logo.svg";
import styled from 'styled-components';

const HeaderHTML = styled.header`
    background-color: #282c34;
    min-height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
    position: sticky;
    top: 0;
    padding-left: 5vw;
    z-index: 10;
`;
const H1 = styled.p`
    color: white;
    transform: translate(23px, 20px);
    font-weight: 800;
    font-size: 3rem;
`;
const Img = styled.img`
    height: 4rem;
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
                <H1>Crypto Price Tracker</H1>
          </HeaderHTML>
        )
    }
}
