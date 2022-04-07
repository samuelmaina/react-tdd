import React, { Component } from "react";
import { PersonList } from "./Components";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <PersonList />
      </div>
    );
  }
}

export default App;
