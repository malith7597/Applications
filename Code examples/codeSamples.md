# Rendering list items

## need to set key in li item , since each tag contains unique value the tag value is used.

```js
export default class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : this.state.count;
  }
}
```

# Conditional Rendering

```js
import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 1,
    tags: [],
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
        {this.state.tags.length === 0 && "Please add some tags"}
        <p> {this.renderTags()}</p>
      </div>
    );
  }
}
```

# Handling events

```js
export default class Counter extends Component {
  state = {
    count: 1,
    tags: [],
  };
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("Increment Clicked");
    this.setState({ count: this.state.count + 1 });
  }

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
```

## Here few things need to remember.

# in button click this is undefined unlesss adding a constructor to the class.before this keyword ,

# to update the view, in class component => this.setState();

# Passing Arguements.

```js


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

      </div>
    );
  }
}




```
