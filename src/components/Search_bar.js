import React, { Component } from "react";

export default class Search_bar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  // onInputChange(event) {
  //   this.setState({ term: event.target.value });
  // }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}
