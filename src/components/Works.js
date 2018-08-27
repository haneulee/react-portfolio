import React from "react";
import Card from "./common/Card";
import styled from "styled-components";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../styles/worksStyle.css";

const WorkWrap = styled.div`
  font-size: 15pt;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10pt;
`;

const Works = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="worksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <WorkWrap>
        <Card imgUrl={require("../image/works/withUs.png")} linkUrl="/withUs" />
        <Card
          imgUrl={require("../image/works/soundableSeeing.png")}
          linkUrl="/soundableSeeing"
        />
        <Card
          imgUrl={require("../image/works/colouredHearing.jpg")}
          linkUrl="/colouredHearing"
        />
        <Card
          imgUrl={require("../image/works/handLetter.gif")}
          linkUrl="/handLetter"
        />
        <Card
          imgUrl={require("../image/works/missLee.png")}
          linkUrl="/missLee"
        />
      </WorkWrap>
    </ReactCSSTransitionGroup>
  );
};

export default Works;
