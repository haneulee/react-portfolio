import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Works from "./Works";
import About from "./About";
import WithUs from "./works/WithUs";
import SoundableSeeing from "./works/SoundableSeeing";
import ColouredHearing from "./works/ColouredHearing";
import HandLetter from "./works/HandLetter";
import MissLee from "./works/MissLee";
// import {
//   WithUs,
//   SoundableSeeing,
//   ColouredHearing,
//   HandLetter,
//   MissLee
// } from "works";

const Content = () => {
  return (
    <Switch location={this.props.location}>
      <Route exact path="/" component={Home} />
      <Route path="/works" component={Works} />
      <Route path="/about" component={About} />
      <Route path="/withUs" component={WithUs} />
      <Route path="/soundableSeeing" component={SoundableSeeing} />
      <Route path="/colouredHearing" component={ColouredHearing} />
      <Route path="/handLetter" component={HandLetter} />
      <Route path="/missLee" component={MissLee} />
    </Switch>
  );
};

export default Content;
