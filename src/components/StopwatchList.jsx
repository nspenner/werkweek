import React from "react";
import AddButton from "./AddButton";
import Stopwatch from "./Stopwatch";

class StopwatchList extends React.Component {
  render() {
    const watchList = this.props.watches.map((watch) => {
      return (
        <li key={watch.id}>
          <Stopwatch deleteWatch={this.props.deleteWatch} id={watch.id} />
        </li>
      );
    });
    return (
      <ul>
        {watchList}
        <li key="addButton">
          <AddButton addWatch={this.props.addWatch} />
        </li>
      </ul>
    );
  }
}

export default StopwatchList;
