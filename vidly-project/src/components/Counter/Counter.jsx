import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 1,
    tags: [],
  };
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return "There are no tags!";
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <span>{this.state.count} </span>
        <button onClick={() => this.handleIncrement()}> Increment </button>
      </div>
    );
  }
}
