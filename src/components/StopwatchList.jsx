import React from "react";
import PropTypes from "prop-types";
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
          <div className="placeholder-container">
            <AddButton addWatch={this.props.addWatch} />
          </div>
        </li>
      </ul>
    );
  }
}

StopwatchList.propTypes = {
  watches: PropTypes.array.isRequired,
  deleteWatch: PropTypes.func.isRequired,
  addWatch: PropTypes.func.isRequired,
};

export default StopwatchList;
