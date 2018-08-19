import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  margin: 4px;
  padding: 5px;
  flex: 1;
  align-self: center;
  color: grey;
`;

const Footer = () => {
  return <FooterWrap>2018 Haneul Lee. All Rights Reserved</FooterWrap>;
};

export default Footer;
