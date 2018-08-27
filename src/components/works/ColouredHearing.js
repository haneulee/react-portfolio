import React from "react";
import Slide from "../common/Slide";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  flex: 1;
  padding: 20pt 0;
`;

const imgUrl = [
  require("../../image/works/colouredHearing/1.jpg"),
  require("../../image/works/colouredHearing/2.jpg"),
  require("../../image/works/colouredHearing/3.jpg")
];

const ColouredHearing = () => {
  return (
    <Container>
      <Slide list={imgUrl} />
    </Container>
  );
};

export default ColouredHearing;
