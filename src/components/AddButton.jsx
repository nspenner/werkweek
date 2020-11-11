import React from "react";
import PropTypes from "prop-types";

class AddButton extends React.Component {
  render() {
    return (
      <div className="button-list">
        <button
          onClick={() => this.props.addWidget("stopwatch")}
          className="m--xsm"
        >
          Add Stopwatch
        </button>
        <button
          onClick={() => this.props.addWidget("countdown")}
          className="m--xsm"
        >
          Add Countdown
        </button>
        <button
          onClick={() => this.props.addWidget("alarm")}
          className="m--xsm"
        >
          Add alarm
        </button>
      </div>
    );
  }
}

AddButton.propTypes = {
  addWidget: PropTypes.func.isRequired,
};

export default AddButton;
