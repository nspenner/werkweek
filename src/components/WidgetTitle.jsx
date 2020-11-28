import React from "react";
import PropTypes from "prop-types";

class WidgetTitle extends React.Component {
  handleKeyPress = (e) => {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      e.target.blur();
    }
  };

  render() {
    return (
      <div
        className="border-curve--top"
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        {" "}
        <div className="p--sml flex-container--centered">
          <textarea
            name={this.props.inputName}
            className="title__input"
            rows="1"
            onKeyDown={this.handleKeyPress}
            onChange={this.props.onChange}
            onBlur={this.props.onChange}
            value={this.props.titleValue}
          ></textarea>
        </div>
        <div className="drag-handle">
          <ion-icon name="reorder-two-outline"></ion-icon>
        </div>
        <button className="close-button" onClick={this.props.onDelete}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-x"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
            />
            <path
              fillRule="evenodd"
              d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
            />
          </svg>
        </button>
      </div>
    );
  }
}

WidgetTitle.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  titleValue: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

export default WidgetTitle;
