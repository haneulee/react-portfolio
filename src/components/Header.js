import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  font-size: 15pt;
  flex: 1;
  display: flex;
  flex-direction: row;
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
      <NavLink to="/works">works</NavLink>
      <NavLink to="/about">about</NavLink>
      <Flex />
    </HeaderWrap>
  );
};

export default Header;
