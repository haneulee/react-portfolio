import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../styles/homeStyle.css";
import Works from "./Works";

const Home = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Works />
    </ReactCSSTransitionGroup>
  );
};

export default Home;
