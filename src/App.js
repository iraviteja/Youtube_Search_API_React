import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import "./App.css";

import SearchBar from "./components/Search_bar";
import VideoList from "./components/Video_list";
import VideoDetail from "./components/Video_detail";
import config from "./config.json";

const { API_KEY } = config;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: "Planet Earth" }, data => {
      this.setState({ videos: data, selectedVideo: data[0] });
    });
  }
  render() {
    return (
      <div className="container">
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
