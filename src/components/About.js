import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../styles/aboutStyle.css";

const About = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="aboutTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="about">About</div>
    </ReactCSSTransitionGroup>
  );
};

export default About;
