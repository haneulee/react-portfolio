import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import styled from "styled-components";

const styles = {
  main: {
    margin: 0,
    padding: 0,
    display: "flex",
    height: "100%",
    flexDirection: "column"
  },
  article: {
    margin: "4px",
    padding: "5px",
    borderRadius: "7pt",
    background: "red",
    flex: 6,
    alignItems: "stretch"
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
