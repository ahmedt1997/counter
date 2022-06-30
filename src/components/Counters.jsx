import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 89 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            // value={c.value}
            // name="ahmed"
          />
        ))}
      </div>
    );
  }
}

export default Counters;
