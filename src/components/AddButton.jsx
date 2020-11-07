import React from "react";
import PropTypes from "prop-types";

class AddButton extends React.Component {
  render() {
    return (
      <div className="button-list">
        <button
          onClick={() => this.props.addWidget("stopwatch")}
          className="AddButton"
        >
          Add Stopwatch
        </button>
        <button
          onClick={() => this.props.addWidget("countdown")}
          className="AddButton"
        >
          Add Countdown
        </button>
      </div>
    );
  }
}

AddButton.propTypes = {
  addWidget: PropTypes.func.isRequired,
};

export default AddButton;
