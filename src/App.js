import React from "react";
import StopwatchList from "./components/StopwatchList";

import "./App.css";

let idCounter = 0;
class App extends React.Component {
  state = {
    watches: [],
  };

  addWatch = () => {
    this.setState({
      watches: [
        ...this.state.watches,
        { index: this.state.watches.length + 1, id: ++idCounter },
      ],
    });
  };

  deleteWatch = (id) => {
    console.log(id);
    let watches = this.state.watches;
    let filteredWatches = watches.filter((watch) => watch.id !== id);
    this.setState({ watches: filteredWatches });
  };

  componentDidMount = () => {
    this.setState({
      watches: [{ index: 0, id: ++idCounter }],
    });
  };

  render() {
    return (
      <div className="App">
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
