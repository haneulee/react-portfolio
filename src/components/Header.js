import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  margin: 4px;
  padding: 5px;
  border-radius: 7pt;
  background: green;
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Link to="/">Home</Link>
      <Link to="/works">Works</Link>
      <Link to="/about">About</Link>
    </HeaderWrap>
  );
};

export default Header;
