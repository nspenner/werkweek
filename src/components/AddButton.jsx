import React from "react";
import PropTypes from "prop-types";

class AddButton extends React.Component {
  render() {
    return (
      <div className="button-list">
        <button onClick={() => this.props.addWidget("stopwatch")}>
          Add Stopwatch
        </button>
        <button onClick={() => this.props.addWidget("countdown")}>
          Add Countdown
        </button>
        <button onClick={() => this.props.addWidget("alarm")}>Add Alarm</button>
      </div>
    );
  }
}

AddButton.propTypes = {
  addWidget: PropTypes.func.isRequired,
};

export default AddButton;
