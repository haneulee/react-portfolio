import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  font-size: 15pt;
  flex: 1;
  display: flex;
  flex-direction: row;
  & a:hover {
    background: palevioletred;
  }
`;

const Flex = styled.div`
  flex: 1;
`;

// const A = styled(Link)`
//   color: black,
//   text-decoration: none,
//   padding: 0 5pt
// `;

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
    padding: "0 5pt"
  }
};

const Header = () => {
  return (
    <HeaderWrap>
      <Flex>
        <NavLink style={styles.link} to="/">
          HANEUL LEE
        </NavLink>
      </Flex>
      <NavLink style={styles.link} to="/works">
        works
      </NavLink>
      <NavLink style={styles.link} to="/about">
        about
      </NavLink>
      <Flex />
    </HeaderWrap>
  );
};

export default Header;
