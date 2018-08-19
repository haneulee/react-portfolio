import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const WithUs = () => {
  return (
    <ReactCSSTransitionGroup
      transitionName="aboutTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div>"WithUs"</div>
    </ReactCSSTransitionGroup>
  );
};

export default WithUs;
