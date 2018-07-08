import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/Search_bar.js";
import config from "./config.json";

const { API_KEY } = config;

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
