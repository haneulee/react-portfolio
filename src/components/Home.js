import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../styles/homeStyle.css";

const Home = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div>Home</div>
    </ReactCSSTransitionGroup>
  );
};

export default Home;
