import React from "react";
import styled, { keyframes } from "styled-components";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../styles/introStyle.css";

const transition = keyframes`
  16.665%,
  33.33% {
    opacity: 1;
  }
  49.995%,
  100% {
    opacity: 0;
  }
`;

const scaleTransition = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(2);
    opacity: 0.1;
  }
`;

const IntroWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  animation: 4s ${transition} linear 0s; /* 6 second per slide, 3 slides, total 18s */
  animation-fill-mode: forwards;
`;

const ImgWrap = styled.img`
  top: 45%;
  left: 45%;
  position: relative;
  animation: 3.5s ${scaleTransition} linear 0s;
  animation-fill-mode: forwards;
`;

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: false });
    }, 3500);
  }

  render() {
    return (
      <div>
        {this.state.isVisible && (
          <IntroWrap>
            <ImgWrap
              src={require("../image/about/about1.png")}
              alt=""
              width="100"
              height="100"
            />
          </IntroWrap>
        )}
      </div>
    );
  }
}

export default Intro;
