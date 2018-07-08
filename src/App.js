import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import "./App.css";

import SearchBar from "./components/Search_bar.js";
import VideoList from "./components/VideoList";
import config from "./config.json";

const { API_KEY } = config;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "Ravi teja" }, data => {
      this.setState({ videos: data });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
