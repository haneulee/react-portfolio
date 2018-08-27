import React from "react";
import Slide from "../common/Slide";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  flex: 1;
  padding: 20pt 0;
`;

const imgUrl = [
  require("../../image/works/handLetter/1.jpg"),
  require("../../image/works/handLetter/2.jpg"),
  require("../../image/works/handLetter/3.jpg"),
  require("../../image/works/handLetter/4.jpg")
];

const HandLetter = () => {
  return (
    <Container>
      <Slide list={imgUrl} />
    </Container>
  );
};

export default HandLetter;
