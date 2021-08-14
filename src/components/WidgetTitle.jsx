import React from "react";
import PropTypes from "prop-types";

class WidgetTitle extends React.Component {
  state = {
    textAreaClassName: "note-container hidden",
  };

  handleKeyPress = (e) => {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
      e.target.blur();
    }
  };

  openNotes = () => {
    let { textAreaClassName } = this.state;
    if (textAreaClassName.includes("hidden")) {
      textAreaClassName = "note-container";
    } else {
      textAreaClassName = "note-container hidden";
    }
    this.setState({ textAreaClassName });
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
        <div>
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
          <button className="note-button" onClick={this.openNotes}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
            >
              <title>Document Text</title>
              <path
                d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
          </button>
          <div className={this.state.textAreaClassName}>
            <textarea
              className="note-container_textarea"
              placeholder="Add a note..."
            ></textarea>
          </div>
        </div>
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
  noteContent: PropTypes.string
};

export default WidgetTitle;
