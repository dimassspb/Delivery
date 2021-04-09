import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo1.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 100px;
`;

const Login = styled.button`

background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin-right: 15px;
    transition-property: color, background-color, border-color;
    transition-duration: 0.3s;
      &:hover {
        background-color: #fff;
        color: #299b01;
        border-color: #299b01;
  }
}
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>Delivery</H1>
    </Logo>
    <Login>Войти</Login>
  </NavBarStyled>
);
