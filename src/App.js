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
    this.videoSearch("Planet Earth");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, data => {
      this.setState({ videos: data, selectedVideo: data[0] });
    });
  }

  render() {
    return (
      <div className=".container-fluid">
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
