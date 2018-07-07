import React, { Component } from "react";
import "./App.css";
import config from "./config.json";

const { API_KEY } = config;

class App extends Component {
  render() {
    return <h1 className="App">Hello World!!!</h1>;
  }
}

export default App;
