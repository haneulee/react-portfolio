import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { injectGlobal } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

injectGlobal`
  @font-face {
    font-family:'Verdana, Geneva, sans-serif'
  }
  // @font-face {
  //     font-family: 'SourceSansPro-Bold';
  //     src: url(../font/SourceSansPro-Bold.ttf) format('truetype');
  // }
  // @font-face {
  //     font-family: 'SourceSansPro-Regular';
  //     src: url(../font/SourceSansPro-Regular.ttf) format('truetype');
  // }
  body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #fff;
    color: #000;
  }
  *,
  h1 {margin: 0;padding: 0;box-sizing: border-box;}
  h1, h2, h3, h4{cursor: default;}
  a {text-decoration: none;color: grey;}
  ul {list-style-type: none;}
  img {border: none;}
  html {font-size: 0.625em;}
  hr {display: none;}
`;

const styles = {
  main: {
    margin: "5pt",
    display: "flex",
    height: "100%",
    flexDirection: "column"
  }
};

class App extends Component {
  render() {
    return (
      <Router basename="react-portfolio">
        <div style={styles.main}>
          <Header />
          <Content />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
