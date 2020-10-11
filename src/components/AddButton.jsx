import React from "react";
import PropTypes from "prop-types";

class AddButton extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.addWidget("stopwatch")}
          className="AddButton"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
            />
          </svg>
        </button>
        <button onClick={() => this.props.addWidget("countdown")}>
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
