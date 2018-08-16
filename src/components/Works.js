import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../styles/worksStyle.css";

const Works = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="worksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div>Works</div>
    </ReactCSSTransitionGroup>
  );
};

export default Works;
