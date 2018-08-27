import React from "react";
import Slide from "../common/Slide";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  flex: 1;
  padding: 20pt 0;
`;

const imgUrl = [
  require("../../image/works/missLee/1.jpg"),
  require("../../image/works/missLee/2.jpg"),
  require("../../image/works/missLee/3.jpg"),
  require("../../image/works/missLee/4.jpg")
];

const MissLee = () => {
  return (
    <Container>
      <Slide list={imgUrl} />
    </Container>
  );
};

export default MissLee;
