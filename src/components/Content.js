import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";
import About from "./About";
import {
  WithUs,
  SoundableSeeing,
  ColouredHearing,
  HandLetter,
  MissLee
} from "components/works";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/main" component={Main} />
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
