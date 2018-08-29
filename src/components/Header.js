import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  font-size: 15pt;
  flex: 1;
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  position: fixed;
  width: 100%;
  z-index: 900;
  & a:hover {
    color: grey;
  }
  & a {
    color: black;
    padding: 0 5pt;
  }
`;

const Flex = styled.div`
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Flex>
        <NavLink to="/">HANEUL LEE</NavLink>
      </Flex>
      <NavLink to="/main">WORK</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <Flex />
    </HeaderWrap>
  );
};

export default Header;
