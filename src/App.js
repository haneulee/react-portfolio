import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { injectGlobal } from "styled-components";

injectGlobal`
  @font-face {
    font-family:'Verdana, Geneva, sans-serif'
  }
  body {
    margin: 0;
  }
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
      <div style={styles.main}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
