import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  margin: 4px;
  padding: 5px;
  border-radius: 7pt;
  background: blue;
  flex: 1;
`;

const Footer = () => {
  return <FooterWrap>2018 Haneul Lee. All Rights Reserved</FooterWrap>;
};

export default Footer;
