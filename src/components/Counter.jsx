import React, { Component } from "react";
class Counter extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        {/* {this.state.tags.length === 0 && "please create new tags"} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* {this.renderTags()} */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-3"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
