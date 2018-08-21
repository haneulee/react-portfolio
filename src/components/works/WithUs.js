import React from "react";
import Slide from "../common/Slide";
import styled, { keyframes } from "styled-components";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Container = styled.div`
  width: 100%;
  flex: 1;
`;

const imgUrl = [
  require("../../image/works/withUs/1.jpg"),
  require("../../image/works/withUs/2.jpg"),
  require("../../image/works/withUs/3.jpg"),
  require("../../image/works/withUs/4.jpg")
];

const WithUs = () => {
  return (
    <Container>
      <Slide list={imgUrl} />
    </Container>
  );
};

export default WithUs;
