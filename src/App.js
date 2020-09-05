import React from "react";
import StopwatchList from "./components/StopwatchList";
import { set, get, del } from "idb-keyval";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

class App extends React.Component {
  state = {
    watches: [],
  };

  getValue = (key) => {
    get(key).then((val) => {
      console.log(val);
    });
  };

  addWatch = () => {
    const watches = [
      ...this.state.watches,
      { index: this.state.watches.length + 1, id: uuidv4() },
    ];
    set("watches", watches);
    this.setState({
      watches,
    });
  };

  deleteWatch = (id) => {
    console.log(id);
    let watches = this.state.watches;
    let filteredWatches = watches.filter((watch) => watch.id !== id);
    set('watches', filteredWatches);
    del(id);
    this.setState({ watches: filteredWatches });
  };

  componentDidMount = async () => {
    let watches = await get("watches");
    if (!watches) {
      watches = [{ index: 0, id: uuidv4() }];
    }
    this.setState({
      watches,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.testCounter}
        <header>
          <h1>WerkWeek</h1>
        </header>
        <div>
          <StopwatchList
            watches={this.state.watches}
            addWatch={this.addWatch}
            deleteWatch={this.deleteWatch}
          />
        </div>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({ watches: event.target.value });
  };
}

export default App;
