import React, { Component } from "react";
import Counters from "./components/Counters";
class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Counters />
      </main>
    );
  }
}

export default App;
